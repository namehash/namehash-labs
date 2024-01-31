/* eslint-disable @next/next/no-img-element */
import { FormEvent, useState } from "react";
import { CheckIcon, XCircleIcon } from "@heroicons/react/24/solid";
import cc from "classcat";
import * as Yup from 'yup';

export const formSchema = Yup.object().shape({
    name: Yup.string()
        .required('Name is required'),
    email: Yup.string()
        .email('Invalid email format')
        .required('Email is required'),
    telegram: Yup.string()
        .matches(/^$|^[A-Za-z0-9_]+$/, "Invalid Telegram username")
        .optional(),
    message: Yup.string()
        .required('Message is required'),
});

enum FormFields {
    Name = "name",
    Email = "email",
    Telegram = "telegram",
    Message = "message",
}

export interface FormDataProps {
    name: string,
    email: string,
    telegram: string,
    message: string,
}

const validationErrorsInitialState = {
    [FormFields.Name]: '',
    [FormFields.Email]: '',
    [FormFields.Telegram]: '',
    [FormFields.Message]: '',
};

interface ValidationErrors {
    [key: string]: string;
}


export const ContactUsForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("")
    const [successfulFormSubmit, setSuccessfulFormSubmit] = useState(false);
    const [validationErrors, setValidationErrors] = useState<ValidationErrors>(validationErrorsInitialState);

    const submitForm = async (e: FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        const formData: FormData = new FormData(e.target as HTMLFormElement);

        const data: FormDataProps = {
            name: formData.get(FormFields.Name)?.toString().trim() || "",
            email: formData.get(FormFields.Email)?.toString().trim() || "",
            telegram: formData.get(FormFields.Telegram)?.toString().trim() || "",
            message: formData.get(FormFields.Message)?.toString().trim() || "",
        };

        try {
            // Validate form data against the schema
            await formSchema.validate(data, { abortEarly: false });
            setValidationErrors(validationErrorsInitialState); // Reset validation errors on successful validation

            // Proceed with form submission if validation is successful
            await sendData(data);

        } catch (validationError) {
            if (validationError instanceof Yup.ValidationError) {
                const errors: ValidationErrors = {
                    [FormFields.Name]: '',
                    [FormFields.Email]: '',
                    [FormFields.Telegram]: '',
                    [FormFields.Message]: '',
                };

                for (const err of validationError.inner) {
                    if (err.path && Object.values(FormFields).includes(err.path as FormFields)) {
                        errors[err.path as FormFields] = err.message;
                    }
                }

                setErrorMessage("One or more fields have an error. Please check and try again.")
                setValidationErrors(errors);
            }
        } finally {
            setIsLoading(false);
        }
    };

    const sendData = async (data: FormDataProps) => {
        const apiUrl = `${window.location.origin}/api/contact-form`;

        const fetchPromise = fetch(apiUrl as string, {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
            },
            body: JSON.stringify(data)
        });

        const timeoutPromise = new Promise<Response>((resolve, reject) => {
            setTimeout(() => {
                reject(new Error('It seems your search is taking a long time to load. Try again later.'));
            }, 10000);
        });

        try {
            const response = await Promise.race([fetchPromise, timeoutPromise]);

            if (!response.ok) {
                throw new Error(`Connection lost. Please check your connection and try again.`);
            }

            setSuccessfulFormSubmit(true);
        } catch (error) {
            if (error instanceof TypeError) {
                // Likely a network error
                console.error("Network error: ", error.message);
                setErrorMessage("Connection lost. Please check your connection and try again.");
            } else if (error instanceof Error) {
                setErrorMessage(error.message);
            } else {
                setErrorMessage("An unexpected error occurred");
            }
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name } = e.target;
        setValidationErrors({ ...validationErrors, [name]: '' });
    };

    return (
        <form onSubmit={submitForm} className="h-full w-full">
            <div className="mx-auto lg:mr-0 gap-y-5 w-full h-full gap-5 flex flex-col relative">
                <div>
                    <h3 className="text-2xl font-semibold">Send a message</h3>
                </div>

                {
                    successfulFormSubmit ? (
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
                            {isLoading && <div className="absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2">Loading...</div>}
                            <div className={`mx-auto lg:mr-0 gap-y-5 w-full h-full gap-5 flex flex-col relative ${isLoading && "opacity-0"}`}>
                                {errorMessage && (
                                    <span className="flex space-x-3 items-center p-4 rounded-md border border-red-100 bg-red-50">
                                        <XCircleIcon className="text-red-400 w-5 h-5" />

                                        <p className="text-red-800 font-medium text-sm">
                                            {errorMessage}
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
                                            onChange={handleInputChange}
                                            className={cc([
                                                "block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 outline-none sm:text-sm sm:leading-6",
                                                {
                                                    "ring-red-300": validationErrors[FormFields.Name],
                                                },
                                            ])}
                                        />
                                    </div>

                                    {validationErrors[FormFields.Name] && (
                                        <span className="mt-2 text-sm font-normal text-red-600">
                                            {validationErrors[FormFields.Name]}
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
                                        onChange={handleInputChange}
                                        autoComplete="email"
                                        name={FormFields.Email}
                                        className={cc([
                                            "block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 outline-none sm:text-sm sm:leading-6",
                                            {
                                                "ring-red-300": validationErrors[FormFields.Email],
                                            },
                                        ])}
                                    />
                                    {validationErrors[FormFields.Email] && (
                                        <span className="mt-2 text-sm font-normal text-red-600">
                                            {validationErrors[FormFields.Email]}
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
                                            onChange={handleInputChange}
                                            autoComplete="tel"
                                            name={FormFields.Telegram}
                                            className="block w-full rounded-md border-0 pr-3.5 pl-6 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 outline-none sm:text-sm sm:leading-6"
                                        />
                                        {validationErrors[FormFields.Telegram] && (
                                            <span className="mt-2 text-sm font-normal text-red-600">
                                                {validationErrors[FormFields.Telegram]}
                                            </span>
                                        )}
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
                                        onChange={handleInputChange}
                                        defaultValue={""}
                                        name={FormFields.Message}
                                        className={cc([
                                            "block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 outline-none sm:text-sm sm:leading-6",
                                            {
                                                "ring-red-300": validationErrors[FormFields.Message],
                                            },
                                        ])}
                                    />

                                    {validationErrors[FormFields.Message] && (
                                        <span className="mt-2 text-sm font-normal text-red-600">
                                            {validationErrors[FormFields.Message]}
                                        </span>
                                    )}
                                </div>
                                <div className="flex h-full justify-end items-end">
                                    <button
                                        type="submit"
                                        className="rounded-lg bg-black px-4 py-2 text-center text-base font-medium text-white shadow-sm hover:bg-gray-800 w-full lg:w-auto transition-colors duration-300"
                                    >
                                        Send message
                                    </button>
                                </div>
                            </ div>
                        </>
                    )}
            </div>
        </form>

    );
};