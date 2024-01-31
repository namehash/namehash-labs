import { FormDataProps, formSchema } from "@/components/2 - molecules/contact-us-form";
import { NextApiRequest, NextApiResponse } from "next";
import * as Yup from 'yup';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const formData = req.body;
    const parsedFormData = JSON.parse(formData)

    const validationError = await validateFormData(parsedFormData);

    if (validationError) {
      // Handle the validation error
      res.status(400).json({ error: validationError.errors });
      return;
    }

    const formattedData = await formatDataForService(parsedFormData);

    // Send the data to slack
    const destinationResponse = await sendToDestinationService(formattedData);

    // Check if the response from the service is successful
    if (destinationResponse.ok) {
      res.status(200).json({ message: "Form data sent successfully" });
    } else {
      // Handle any errors from the destination service
      res.status(destinationResponse.status).json({ error: "Error sending form data to the destination service" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error processing request" });
  }
}

// Validation function
async function validateFormData(data: FormDataProps): Promise<Yup.ValidationError | null> {
  try {
    await formSchema.validate(data, { abortEarly: false });
    return null; // No errors, return null
  } catch (error) {
    if (error instanceof Yup.ValidationError) {
      return error; // Return the validation error
    }
    throw error; // Rethrow other types of errors
  }
}

const formatDataForService = (data: FormDataProps) => {
  const nameDisplay = `*Name*: ${data.name}`
  const emailDisplay = `*Email*: ${data.email}`
  const telegramDisplay = `*Telegram*: ${data.telegram}`
  const messageDisplay = `*Message*: ${data.message}`

  return {
    "blocks": [
      {
        "type": "section",
        "text": {
          "type": "plain_text",
          "text": ":memo: New message from NameHashLabs contact page using API",
          "emoji": true
        }
      },
      {
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": nameDisplay
        }
      },
      {
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": emailDisplay
        }
      },
      {
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": telegramDisplay
        }
      },
      {
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": messageDisplay
        }
      }
    ]
  }
}

async function sendToDestinationService(data: any) {
  const slackWebhookUrl = process.env.FORM_SUBMISSION_SLACK_WEBHOOK;
  return await fetch(slackWebhookUrl as string, {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
    },
    body: JSON.stringify(data)
  });
}