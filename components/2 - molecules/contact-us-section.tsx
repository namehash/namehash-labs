/* eslint-disable @next/next/no-img-element */
import { FormEvent, useState } from "react";
import { PreSectionText, SectionText, SectionTitle } from "../1 - atoms";
import { CheckIcon, XCircleIcon } from "@heroicons/react/24/solid";
import cc from "classcat";
import { ColorfulBg } from "../1 - atoms/colorful-bg";

enum FormFields {
  Name = "name",
  Email = "email",
  Telegram = "telegram",
  Message = "message",
}

const invalidFieldsInitialState = {
  [FormFields.Name]: false,
  [FormFields.Email]: false,
  [FormFields.Telegram]: false,
  [FormFields.Message]: false,
};

interface FormDataProps {
  name: string,
  email: string,
  telegram: string,
  message: string,
}

export const ContactSection = () => {
  const isValidEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const [invalidFields, setInvalidFields] = useState<
    Record<FormFields, boolean>
  >(invalidFieldsInitialState);

  const [successfulFormSubmit, setSuccessfulFormSubmit] = useState(false);

  const alo = process.env.NEXT_PUBLIC_SLACK_URL;
  console.log("form url: ", alo)

  


  async function submitForm(url: string, data: FormDataProps) {

    const nameDisplay = `*Name*: ${data.name}`
    const emailDisplay = `*Email*: ${data.email}`
    const telegramDisplay = `*Telegram*: ${data.telegram}`
    const messageDisplay = `*Message*: ${data.message}`


    const payload = {
      "blocks": [
        {
          "type": "section",
          "text": {
            "type": "plain_text",
            "text": ":memo: New message from NameHashLabs contact page",
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


    console.log("url", process.env.NEXT_PUBLIC_SLACK_URL)
    console.log("payload", JSON.stringify(payload))
    try {
        const response = await fetch(process.env.NEXT_PUBLIC_SLACK_URL as string, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            throw new Error(`Error! status: ${response.status}`);
        }

        const result = await response.json();
        setSuccessfulFormSubmit(true);
        return result;
    } catch (error) {
        console.error('There was an error!', error);
    }
}

  const validateForm = async (e: FormEvent) => {
    e.preventDefault();

    const formData: FormData = new FormData(e.target as HTMLFormElement);

    const nameInput = formData.get(FormFields.Name);
    const emailInput = formData.get(FormFields.Email);
    const telegramInput = formData.get(FormFields.Telegram);
    const messageInput = formData.get(FormFields.Message);


    const data: FormDataProps = {
      name: nameInput?.toString() || "",
      email: emailInput?.toString() || "",
      telegram: telegramInput?.toString() || "",
      message: messageInput?.toString() || "",
    }

    console.log(data)
    
    let invalidFormFields = invalidFieldsInitialState;

    if (!nameInput) {
      invalidFormFields = { ...invalidFormFields, [FormFields.Name]: true };
    }

    if (!emailInput || !isValidEmail(emailInput.toString())) {
      invalidFormFields = { ...invalidFormFields, [FormFields.Email]: true };
    }

    if (!messageInput) {
      invalidFormFields = { ...invalidFormFields, [FormFields.Message]: true };
    }

    setInvalidFields(invalidFormFields);

    if (Object.values(invalidFormFields).some((val) => !!val)) {
      return;
    } else {
      await submitForm(alo as string, data);
    }
  };

  return (
    <section className="w-full max-w-[1216px] py-20 px-5">
      <ColorfulBg className="absolute top-0 left-0 w-full z-[-1]" />
      <div className="lg:mt-[100px] lg:mb-[120px] mt-[60px] mb-[60px]">
        <PreSectionText className="text-start ">
          Get in touch
        </PreSectionText>
        <h1 className="font-bold text-[52px] ">
          Contact
        </h1>
      </div>

      <div className="w-full flex lg:flex-row flex-col justify-between items-center rounded-[8px] bg-gradient-to-r lg:px-10 lg:py-8 p-5 mb-20 from-[#2D2D2D] to-black">
        <div className="flex flex-col gap-2 mb-4 lg:mb-0">
          <h3 className="text-2xl leading-8 font-semibold text-white">
            Discuss an integration
          </h3>
          <p className="text-lg leading-7 font-normal text-gray-500">
            Schedule a call with us to discuss integration with any of our products
          </p>
        </div>
        <button className="px-[25px] py-[13px] rounded-[8px] bg-white flex hover:bg-gray-100 transition-colors duration-200 w-full justify-center lg:w-auto">
          Schedule a call
        </button>
      </div>
      <div className="w-full flex flex-col lg:flex-row m-auto gap-10 max-w-7xl">
        <div className="lg:w-1/2 w-full flex flex-col gap-3 items-start">
          <SectionTitle className="text-3xl lg:text-4xl font-bold">
            Let&apos;s talk
          </SectionTitle>
          <SectionText className="text-gray-500 text-lg">
            If you have questions, ideas, or share a passion for advancing ENS
            growth and would like to explore collaboration, please don&apos;t
            hesitate to get reach out.{" "}
          </SectionText>
          <img
            className="hidden lg:block"
            src="/images/paper-airplane.png"
            alt="Paper Airplane Icon"
          />
        </div>
        <div className="lg:w-1/2 w-full bg-gray-50 py-8 px-10 border rounded-[8px] flex justify-center items-center">
          <form onSubmit={validateForm} className="h-full w-full">
            <div className="mx-auto lg:mr-0 gap-y-5 w-full h-full gap-5 flex flex-col">
              <div>
                <h3 className="text-2xl font-semibold">Send a message</h3>
              </div>

              {successfulFormSubmit ? (
                <div className="w-full h-full flex flex-col items-center justify-center">
                  <div className="p-3 bg-green-100 rounded-full mb-6">
                    <CheckIcon className="text-green-400 w-6 h-6" />
                  </div>
                  <p className="text-lg font-semibold">Your message was sent</p>
                  <p className="text-sm text-gray-500 mt-2">
                    We have received your message and will get back to you soon.
                  </p>
                  <button
                    onClick={() => setSuccessfulFormSubmit(false)}
                    className="mt-5 bg-black px-4 py-2 rounded-md shadow-sm text-white text-sm font-medium"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  {Object.values(invalidFields).some((val) => !!val) && (
                    <span className="flex space-x-3 items-center p-4 rounded-md border border-red-100 bg-red-50">
                      <XCircleIcon className="text-red-400 w-5 h-5" />

                      <p className="text-red-800 font-medium text-sm">
                        Fill in missing fields and try again
                      </p>
                    </span>
                  )}

                  <div className="gap-1">
                    <label
                      htmlFor="name"
                      className="block text-sm leading-5 font-medium text-gray-500"
                    >
                      Name
                    </label>
                    <div className="w-full">
                      <input
                        id="name"
                        type="text"
                        name={FormFields.Name}
                        autoComplete="given-name"
                        className={cc([
                          "block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 outline-none sm:text-sm sm:leading-6",
                          {
                            "ring-red-300": invalidFields[FormFields.Name],
                          },
                        ])}
                      />
                    </div>

                    {invalidFields[FormFields.Name] && (
                      <span className="mt-2 text-sm font-normal text-red-600">
                        Name is required
                      </span>
                    )}
                  </div>
                  <div className="gap-1">
                    <label
                      htmlFor="email"
                      className="block text-sm leading-5 font-medium text-gray-500"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="text"
                      autoComplete="email"
                      name={FormFields.Email}
                      className={cc([
                        "block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 outline-none sm:text-sm sm:leading-6",
                        {
                          "ring-red-300": invalidFields[FormFields.Email],
                        },
                      ])}
                    />

                    {invalidFields[FormFields.Email] && (
                      <span className="mt-2 text-sm font-normal text-red-600">
                        Email is required
                      </span>
                    )}
                  </div>
                  <div className="gap-1">
                    <label
                      htmlFor="telegram"
                      className="block text-sm leading-5 font-medium text-gray-500"
                    >
                      Telegram (optional)
                    </label>
                    <div className="relative">
                      <span className="text-sm leading-5 font-medium text-gray-500 absolute left-2 top-2.5">
                        @
                      </span>
                      <input
                        type="tel"
                        id="telegram"
                        autoComplete="tel"
                        name={FormFields.Telegram}
                        className="block w-full rounded-md border-0 pr-3.5 pl-6 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 outline-none sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="gap-1">
                    <label
                      htmlFor="message"
                      className="block text-sm leading-5 font-medium text-gray-500"
                    >
                      Message
                    </label>
                    <textarea
                      rows={4}
                      id="message"
                      defaultValue={""}
                      name={FormFields.Message}
                      className={cc([
                        "block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 outline-none sm:text-sm sm:leading-6",
                        {
                          "ring-red-300": invalidFields[FormFields.Message],
                        },
                      ])}
                    />

                    {invalidFields[FormFields.Message] && (
                      <span className="mt-2 text-sm font-normal text-red-600">
                        Message is required
                      </span>
                    )}
                  </div>
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="rounded-lg bg-black px-4 py-2 text-center text-base font-medium text-white shadow-sm hover:bg-gray-800 w-full lg:w-auto transition-colors duration-300"
                    >
                      Send message
                    </button>
                  </div>
                </>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
