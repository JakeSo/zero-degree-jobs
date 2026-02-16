import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  Textarea,
  VStack,
  Stack,
  Text,
  Fieldset,
  Field,
  Select,
  For,
  Checkbox,
  HStack,
  Progress,
  InputGroup,
  Icon,
  Portal,
  createListCollection,
  Steps, // <-- add Steps import
} from "@chakra-ui/react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod/v4";
import { zodResolver } from "@hookform/resolvers/zod";
import { supabase } from "../../../util/supabase";
import { signUpUser } from "../../../util/userUtils";
import { createCompanyProfile } from "../../../util/companyUtils";

// Form validation schema
const employerSignupSchema = z
  .object({
    // Company Information
    companyName: z.string().min(1, "Company name is required"),
    companySize: z.string().min(1, "Company size is required"),
    industry: z.string().min(1, "Industry is required"),
    companyWebsite: z
      .string()
      .optional()
      .refine(
        (val) => !val || val === "" || z.httpUrl().safeParse("https://" + val).success,
        "Please enter a valid website URL"
      ),
    companyDescription: z
      .string()
      .min(10, "Please provide a brief description (at least 10 characters)"),
    companyAddress: z.string().min(1, "Company address is required"),

    // Representative Information
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    jobTitle: z.string().min(1, "Job title is required"),
    email: z.string().email("Please enter a valid email address"),
    phone: z.string().min(10, "Please enter a valid phone number"),

    // Account Setup
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string().min(8, "Please confirm your password"),

    // Terms and Conditions
    agreeToTerms: z
      .boolean()
      .refine(
        (val) => val === true,
        "You must agree to the terms and conditions"
      ),
    agreeToMarketing: z.boolean().default(false),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

const companySizesCollection = createListCollection({
  items: [
    { label: "1-10 employees", value: "1-10 employees" },
    { label: "11-50 employees", value: "11-50 employees" },
    { label: "51-200 employees", value: "51-200 employees" },
    { label: "201-500 employees", value: "201-500 employees" },
    { label: "501-1000 employees", value: "501-1000 employees" },
    { label: "1000+ employees", value: "1000+ employees" },
  ],
});

const industriesCollection = createListCollection({
  items: [
    { label: "Technology", value: "Technology" },
    { label: "Healthcare", value: "Healthcare" },
    { label: "Finance", value: "Finance" },
    { label: "Education", value: "Education" },
    { label: "Manufacturing", value: "Manufacturing" },
    { label: "Retail", value: "Retail" },
    { label: "Consulting", value: "Consulting" },
    { label: "Real Estate", value: "Real Estate" },
    { label: "Media & Entertainment", value: "Media & Entertainment" },
    { label: "Non-profit", value: "Non-profit" },
    { label: "Government", value: "Government" },
    { label: "Other", value: "Other" },
  ],
});

// Step components
const CompanyInformationStep = ({ register, errors, control }) => (
  <VStack spacing={6} align="stretch">
    <Box textAlign="center" mb={4}>
      <Heading as="h2" size="2xl" mb={2}>
        Tell us about your company
      </Heading>
      <Text color="gray.400">
        Help candidates learn about your organization
      </Text>
    </Box>

    <Stack spacing={4}>
      <Field.Root invalid={!!errors.companyName}>
        <Field.Label>Company Name *</Field.Label>
        <Input
          {...register("companyName")}
          placeholder="Acme Corporation"
          bg="blackAlpha.300"
          border="none"
          size="lg"
        />
        {errors.companyName && (
          <Field.ErrorText>{errors.companyName.message}</Field.ErrorText>
        )}
      </Field.Root>

      <Stack direction={{ base: "column", md: "row" }} spacing={4}>
        <Controller
          name="companySize"
          control={control}
          render={({ field }) => (
            <Select.Root
              collection={companySizesCollection}
              value={field.value ? [field.value] : []}
              onValueChange={({ value }) => field.onChange(value[0] || "")}
              border="none"
              size="lg"
              invalid={!!errors.companySize}
            >
              <Select.HiddenSelect />
              <Select.Label>Company Size *</Select.Label>
              <Select.Control>
                <Select.Trigger
                  className="dark-glassy"
                  borderRadius={"md"}
                  borderColor={!!errors.companySize ? "red.500" : "transparent"}
                >
                  <Select.ValueText placeholder="Select company size" />
                </Select.Trigger>
                <Select.IndicatorGroup>
                  <Select.Indicator />
                </Select.IndicatorGroup>
              </Select.Control>
              <Portal>
                <Select.Positioner>
                  <Select.Content bg={"brand.800"}>
                    {companySizesCollection.items.map((size) => (
                      <Select.Item key={size.value} item={size}>
                        {size.label}
                        <Select.ItemIndicator />
                      </Select.Item>
                    ))}
                  </Select.Content>
                </Select.Positioner>
              </Portal>
            </Select.Root>
          )}
        />
        {/* {errors.companySize && (
            <Field.ErrorText>{errors.companySize.message}</Field.ErrorText>
          )} */}

        <Controller
          name="industry"
          control={control}
          render={({ field }) => (
            <Select.Root
              collection={industriesCollection}
              value={field.value ? [field.value] : []}
              onValueChange={({ value }) => field.onChange(value[0] || "")}
              border="none"
              size="lg"
              invalid={!!errors.industry}
            >
              <Select.HiddenSelect />
              <Select.Label>Industry</Select.Label>
              <Select.Control>
                <Select.Trigger
                  className="dark-glassy"
                  borderRadius={"md"}
                  borderColor={!!errors.industry ? "red.500" : "transparent"}
                >
                  <Select.ValueText placeholder="Select industry" />
                </Select.Trigger>
                <Select.IndicatorGroup>
                  <Select.Indicator />
                </Select.IndicatorGroup>
              </Select.Control>
              <Portal>
                <Select.Positioner>
                  <Select.Content bg={"brand.800"}>
                    {industriesCollection.items.map((industry) => (
                      <Select.Item key={industry.value} item={industry}>
                        {industry.label}
                        <Select.ItemIndicator />
                      </Select.Item>
                    ))}
                  </Select.Content>
                </Select.Positioner>
              </Portal>
            </Select.Root>
          )}
        />
        {/* {errors.industry && (
            <Field.ErrorText>{errors.industry.message}</Field.ErrorText>
          )} */}
      </Stack>

      <Field.Root invalid={!!errors.companyWebsite}>
        <Field.Label>Company Website</Field.Label>
        <InputGroup
          startElement="https://"
            startElementProps={{ fontSize: "lg", color: "fg.muted" }}
        >
          <Input
            {...register("companyWebsite")}
            placeholder="company.com"
            bg="blackAlpha.300"
            border="none"
            size="lg"
            type="url"
            ps={"7ch"}
          />
        </InputGroup>

        {errors.companyWebsite && (
          <Field.ErrorText>{errors.companyWebsite.message}</Field.ErrorText>
        )}
      </Field.Root>

      <Field.Root invalid={!!errors.companyDescription}>
        <Field.Label>Company Description *</Field.Label>
        <Textarea
          {...register("companyDescription")}
          placeholder="Tell us about your company, culture, and what makes it a great place to work..."
          rows={4}
          bg="blackAlpha.300"
          border="none"
          resize="vertical"
        />
        {errors.companyDescription && (
          <Field.ErrorText>{errors.companyDescription.message}</Field.ErrorText>
        )}
      </Field.Root>

      <Field.Root invalid={!!errors.companyAddress}>
        <Field.Label>Company Address *</Field.Label>
        <Input
          {...register("companyAddress")}
          placeholder="123 Main St, City, State, ZIP"
          bg="blackAlpha.300"
          border="none"
          size="lg"
        />
        {errors.companyAddress && (
          <Field.ErrorText>{errors.companyAddress.message}</Field.ErrorText>
        )}
      </Field.Root>
    </Stack>
  </VStack>
);

const PersonalInformationStep = ({ register, errors }) => (
  <VStack spacing={6} align="stretch">
    <Box textAlign="center" mb={4}>
      <Heading as="h2" size="2xl" mb={2}>
        Your contact information
      </Heading>
      <Text color="gray.400">
        We'll use this to set up your account and communicate with you
      </Text>
    </Box>

    <Stack spacing={4}>
      <Stack direction={{ base: "column", md: "row" }} spacing={4}>
        <Field.Root invalid={!!errors.firstName}>
          <Field.Label>First Name *</Field.Label>
          <Input
            {...register("firstName")}
            placeholder="John"
            bg="blackAlpha.300"
            border="none"
            size="lg"
          />
          {errors.firstName && (
            <Field.ErrorText>{errors.firstName.message}</Field.ErrorText>
          )}
        </Field.Root>

        <Field.Root invalid={!!errors.lastName}>
          <Field.Label>Last Name *</Field.Label>
          <Input
            {...register("lastName")}
            placeholder="Doe"
            bg="blackAlpha.300"
            border="none"
            size="lg"
          />
          {errors.lastName && (
            <Field.ErrorText>{errors.lastName.message}</Field.ErrorText>
          )}
        </Field.Root>
      </Stack>

      <Field.Root invalid={!!errors.jobTitle}>
        <Field.Label>Job Title *</Field.Label>
        <Input
          {...register("jobTitle")}
          placeholder="HR Manager, Recruiter, CEO, etc."
          bg="blackAlpha.300"
          border="none"
          size="lg"
        />
        {errors.jobTitle && (
          <Field.ErrorText>{errors.jobTitle.message}</Field.ErrorText>
        )}
      </Field.Root>

      <Stack direction={{ base: "column", md: "row" }} spacing={4}>
        <Field.Root invalid={!!errors.email}>
          <Field.Label>Email Address *</Field.Label>
          <Input
            {...register("email")}
            type="email"
            placeholder="john.doe@company.com"
            bg="blackAlpha.300"
            border="none"
            size="lg"
          />
          {errors.email && (
            <Field.ErrorText>{errors.email.message}</Field.ErrorText>
          )}
        </Field.Root>

        <Field.Root invalid={!!errors.phone}>
          <Field.Label>Phone Number *</Field.Label>
          <Input
            {...register("phone")}
            type="tel"
            placeholder="(555) 123-4567"
            bg="blackAlpha.300"
            border="none"
            size="lg"
          />
          {errors.phone && (
            <Field.ErrorText>{errors.phone.message}</Field.ErrorText>
          )}
        </Field.Root>
      </Stack>
    </Stack>
  </VStack>
);

const AccountSetupStep = ({ register, errors, control }) => (
  <VStack spacing={6} align="stretch">
    <Box textAlign="center" mb={4}>
      <Heading as="h2" size="2xl" mb={2}>
        Create your account
      </Heading>
      <Text color="gray.400">Set up your password and review our terms</Text>
    </Box>

    <Stack spacing={6}>
      <Stack direction={{ base: "column", md: "row" }} spacing={4}>
        <Field.Root invalid={!!errors.password}>
          <Field.Label>Password *</Field.Label>
          <Input
            {...register("password")}
            type="password"
            placeholder="At least 8 characters"
            bg="blackAlpha.300"
            border="none"
            size="lg"
          />
          {errors.password && (
            <Field.ErrorText>{errors.password.message}</Field.ErrorText>
          )}
        </Field.Root>

        <Field.Root invalid={!!errors.confirmPassword}>
          <Field.Label>Confirm Password *</Field.Label>
          <Input
            {...register("confirmPassword")}
            type="password"
            placeholder="Re-enter password"
            bg="blackAlpha.300"
            border="none"
            size="lg"
          />
          {errors.confirmPassword && (
            <Field.ErrorText>{errors.confirmPassword.message}</Field.ErrorText>
          )}
        </Field.Root>
      </Stack>

      <Stack spacing={4}>
        <Field.Root invalid={!!errors.agreeToTerms}>
          <Controller
            name="agreeToTerms"
            control={control}
            render={({ field }) => (
              <Checkbox.Root
                checked={field.value}
                onCheckedChange={(details) => field.onChange(!!details.checked)}
                colorPalette="blue"
              >
                <Checkbox.HiddenInput />
                <Checkbox.Control />
                <Checkbox.Label>
                  <Text fontSize="md">
                    I agree to the{" "}
                    <Text as="span" textDecoration="underline" cursor="pointer">
                      Terms of Service
                    </Text>{" "}
                    and{" "}
                    <Text as="span" textDecoration="underline" cursor="pointer">
                      Privacy Policy
                    </Text>{" "}
                    *
                  </Text>
                </Checkbox.Label>
              </Checkbox.Root>
            )}
          />
          {errors.agreeToTerms && (
            <Field.ErrorText>{errors.agreeToTerms.message}</Field.ErrorText>
          )}
        </Field.Root>

        <Controller
          name="agreeToMarketing"
          control={control}
          render={({ field }) => (
            <Checkbox.Root
              checked={field.value}
              onCheckedChange={(details) => field.onChange(!!details.checked)}
              colorPalette="blue"
            >
              <Checkbox.HiddenInput />
              <Checkbox.Control />
              <Checkbox.Label>
                <Text fontSize="md">
                  I would like to receive updates about new features and hiring
                  tips
                </Text>
              </Checkbox.Label>
            </Checkbox.Root>
          )}
        />
      </Stack>
    </Stack>
  </VStack>
);

// Step indicator component
const StepIndicator = ({ currentStep, totalSteps }) => {
  const steps = [
    { title: "Company Info", description: "About your company" },
    { title: "Your Info", description: "Contact details" },
    { title: "Account Setup", description: "Password & terms" },
  ];

  return (
    <VStack spacing={4} w="full" mb={8}>
      {/* Steps bar */}
      <Box w="full">
        <Steps.Root
          step={currentStep}
          count={steps.length}
          colorPalette="white"
        >
          <Steps.List>
            {steps.map((step, index) => (
              <Steps.Item key={index} index={index} title={step.title}>
                <VStack>
                  <Steps.Indicator />
                  <Box>
                    <Steps.Title>{step.title}</Steps.Title>
                    <Steps.Description>{step.description}</Steps.Description>
                  </Box>
                </VStack>
                <Steps.Separator />
              </Steps.Item>
            ))}
          </Steps.List>
        </Steps.Root>
      </Box>
    </VStack>
  );
};

const EmployerSignupWizard = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  const {
    handleSubmit,
    control,
    register,
    trigger,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(employerSignupSchema),
    mode: "onChange",
    defaultValues: {
      companyName: "",
      companySize: "",
      industry: "",
      companyWebsite: "",
      companyDescription: "",
      companyAddress: "",
      firstName: "",
      lastName: "",
      jobTitle: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      agreeToTerms: false,
      agreeToMarketing: false,
    },
  });

  const getStepFields = (step) => {
    switch (step) {
      case 1:
        return [
          "companyName",
          "companySize",
          "industry",
          "companyWebsite",
          "companyDescription",
          "companyAddress",
        ];
      case 2:
        return ["firstName", "lastName", "jobTitle", "email", "phone"];
      case 3:
        return ["password", "confirmPassword", "agreeToTerms"];
      default:
        return [];
    }
  };

  const handleNext = async () => {
    const fieldsToValidate = getStepFields(currentStep);
    const isStepValid = await trigger(fieldsToValidate);

    if (isStepValid) {
      setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
    }
  };

  const handlePrevious = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const onSubmit = async (data) => {
    try {
      console.log("Form submitted:", data);
      // Here you would typically:
      // 1. Create user account with Supabase Auth
      const user = signUpUser(data.email, data.password, {
        full_name: `${data.firstName} ${data.lastName}`
      });
      if (!user) {
        throw new Error("Failed to create user account");
      }
      // 2. Store company and representative information in database
      const company = createCompanyProfile(
        data.companyName,
        data.companyDescription,
        data.companyWebsite,
        data.industry
      );

      if (!company) {
        throw new Error("Failed to create company profile");
      }

      //TODO: Add employer record linking user and company

      // 3. Send verification email
      // 4. Redirect to dashboard or verification page

      alert(
        "Account created successfully! Please check your email for verification."
      );
    } catch (error) {
      console.error("Signup error:", error);
      alert("There was an error creating your account. Please try again.");
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <CompanyInformationStep
            register={register}
            errors={errors}
            control={control}
          />
        );
      case 2:
        return <PersonalInformationStep register={register} errors={errors} />;
      case 3:
        return (
          <AccountSetupStep
            register={register}
            errors={errors}
            control={control}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Container maxW="4xl" py={10}>
      <VStack spacing={8} align="center">
        {/* Header */}
        <Box textAlign="center">
          <Heading as="h1" size="5xl" mb={4}>
            Join{" "}
            <Box as="span" fontFamily="Nunito" fontWeight="bold">
              zero°
            </Box>
          </Heading>
          <Text fontSize="xl" color="gray.400">
            Start posting jobs and connect with talented candidates
          </Text>
        </Box>

        {/* Form */}
        <Box
          className="dark-glassy"
          p={8}
          borderRadius="lg"
          w="full"
          maxW="2xl"
        >
          <VStack spacing={8}>
            {/* Step Indicator */}
            <StepIndicator currentStep={currentStep} totalSteps={totalSteps} />

            {/* Current Step Content */}
            <Box w="full" minH="400px">
              {renderStep()}
            </Box>

            {/* Navigation Buttons */}
            <HStack spacing={4} w="full" justify="space-between">
              <Button
                variant="ghost"
                onClick={handlePrevious}
                isDisabled={currentStep === 1}
                size="lg"
              >
                Previous
              </Button>

              {currentStep < totalSteps ? (
                <Button
                  onClick={handleNext}
                  bg="blue.500"
                  color="white"
                  _hover={{ bg: "blue.600" }}
                  size="lg"
                >
                  Next Step
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit(onSubmit)}
                  bg="green.500"
                  color="white"
                  _hover={{ bg: "green.600" }}
                  isLoading={isSubmitting}
                  loadingText="Creating Account..."
                  size="lg"
                >
                  Create Account
                </Button>
              )}
            </HStack>

            {currentStep === 1 && (
              <Text fontSize="sm" color="gray.400" textAlign="center">
                Already have an account?{" "}
                <Text
                  as="span"
                  textDecoration="underline"
                  cursor="pointer"
                  color="white"
                >
                  Sign in here
                </Text>
              </Text>
            )}
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default EmployerSignupWizard;
