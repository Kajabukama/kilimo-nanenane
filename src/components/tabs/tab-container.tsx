"use client";
import React, { useState } from "react";
import CustomTab from "./tab";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "../ui/textarea";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";
import { toast } from "../ui/use-toast";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import ButtonIndicator from "../loaders/button-indicator";

const FormSchema = z.object({
  firstName: z.string().min(1, { message: "This field is required" }),
  middleName: z.string().min(1, { message: "This field is required" }),
  lastName: z.string().min(1, { message: "This field is required" }),
  workPhone: z.string().min(1, { message: "This field is required" }),
  mobilePhone: z.string().min(1, { message: "This field is required" }),
  email: z.string().email().min(1, { message: "This field is required" }),
  companyName: z.string().min(1, { message: "This field is required" }),
  companyDescription: z.string().min(1, { message: "This field is required" }),
  country: z.string().min(1, { message: "This field is required" }),
  address: z.string().min(1, { message: "This field is required" }),
  products: z.string().min(1, { message: "This field is required" }),
  registrationType: z.string().min(1, { message: "This field is required" }),
  boothType: z.string().min(1, { message: "This field is required" }),
  participants: z.string().min(1, { message: "This field is required" }),
  other: z.string().min(1, { message: "This field is required" }),
  terms: z.boolean(),
});

const TabContainer = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean | null>(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstName: "",
      middleName: "",
      lastName: "",
      workPhone: "",
      mobilePhone: "",
      email: "",
      companyName: "",
      companyDescription: "",
      country: "",
      products: "",
      registrationType: "",
      boothType: "",
      participants: "",
      other: "",
      terms: true,
    },
  });

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/application", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      if (result.status) {
        router.push("/thank-you");
      }
      toast({
        title: "Your form was submitted",
        description: `${result.description}`,
      });
    } catch (error: any) {
      toast({
        title: "There were problems submitting your request.",
        description: `${error}`,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className="w-full bg-yellow-500/90">
        <div className="mx-auto max-w-screen-xl">
          <div className="flex items-center gap-x-0 uppercase">
            <CustomTab label="Registration" />
            <CustomTab label="Accommodation" />
            <CustomTab label="Logistics" />
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-screen-xl">
        <div className="flex p-10">
          <div className="max-w-96">
            <div className="text-3xl font-black uppercase text-primary">
              <h1>Nanenane Exhibition REGISTRATION 2024</h1>
            </div>
          </div>
          <div className="px-10 space-y-5">
            <div className="border-b pb-10">
              <p>
                Welcome to The Ministry of Agriculture Nanenane 2024 Farmers
                Annual Festival registration page. The The Ministry of
                Agriculture Nanenane 2024 Farmers Annual Festival, will take
                place from October 1st to 8th, 2024 in Dodoma, Tanzania.
              </p>
            </div>

            {/* <div className="border-b pb-10">
              <p className="tracking-normal leading-7">
                Organized under the Ministry of Agriculture on behalf of the
                President of the United Republic of Tanzania,{" "}
                <strong>Honorable, Mama Samia Suluhu Hassan</strong> The
                Nanenane 2024 Farmers Annual Festival, will be held under the
                theme “Innovate, Accelerate and Scale: Delivering food systems
                transformation in a digital and climate era”. With only six
                years left to reach the Sustainable Development Goals (SDGs) and
                one year away from the Malabo Declaration&rsquo;s deadline,
                transforming African food systems stands as a paramount task,
                crucial for ensuring food security and fostering job
                opportunities particularly for youth and women on the continent.
                The Nanenane 2024 Farmers Annual Festival aims to catalyze this
                transformation through innovative science and policies, digital
                technologies and equipment’s, home-grown and global solutions,
                and scaled investments.
              </p>
            </div> */}
            <div className="flex flex-col gap-y-1 font-medium">
              <span>
                Theme : “Elect Reputable Local Government Leaders for
                Sustainable Development of Agricultural Sector”
              </span>
              <span>Nanenane Exhibition - 01th to 8th August 2024</span>
              <span>Grounds - Dodoma Nanenane Grounds, Dodoma, Tanzania</span>
            </div>
            <div className="py-10">
              <h3 className="mb-4 text-2xl font-semibold">Payment methods</h3>
              <p className="font-regular border border-primary p-5 rounded">
                Pay participation fee within 7days after registration and before
                deadline (added). For Nzuguni Exhibition center in Dodoma please
                pay through Account No. 50501100063 Nanenane Kanda ya Kati au
                Airtel money +255 696 121 646 Nanenane Kanda ya Kati
              </p>
            </div>
            {/* <div className="grid grid-cols-3">
              <Button className="py-8">Premium Membership</Button>
            </div> */}
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-full space-y-6 border p-10 rounded"
              >
                <div className="flex w-full gap-x-5">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>First name</FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            id="firstName"
                            placeholder="First name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="middleName"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Middle name</FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            id="middleName"
                            placeholder="Middle name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Last name</FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            id="lastName"
                            placeholder="Last name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex w-full gap-x-5">
                  <FormField
                    control={form.control}
                    name="workPhone"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Work Phone</FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            id="workPhone"
                            placeholder="Work Phone"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="mobilePhone"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Mobile Phone</FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            id="mobilePhone"
                            placeholder="Mobile Phone"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            id="email"
                            placeholder="Email Address"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="space-y-6">
                  <FormField
                    control={form.control}
                    name="companyName"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>
                          Name of Company/Institution/Individual:
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            id="companyName"
                            placeholder="Name of Company/Institution/Individual"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="companyDescription"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Company Description</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Company description"
                            className="resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex items-center gap-x-5">
                  <div className="w-[20vw] items-center gap-1.5">
                    <FormField
                      control={form.control}
                      name="country"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Country of Origin</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Country of Origin" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectLabel>Select Countries</SelectLabel>
                                <SelectItem value="Tanzania">
                                  Tanzania
                                </SelectItem>
                                <SelectItem value="Kenya">Kenya</SelectItem>
                                <SelectItem value="Uganda">Uganda</SelectItem>
                                <SelectItem value="Rwanda">Rwanda</SelectItem>
                                <SelectItem value="Congo">Congo</SelectItem>
                                <SelectItem value="Burundi">Burundi</SelectItem>
                                <SelectItem value="Malawi">Malawi</SelectItem>
                                <SelectItem value="Zambia">Zambia</SelectItem>
                                <SelectItem value="South Africa">
                                  South Africa
                                </SelectItem>
                                <SelectItem value="Other">Other</SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Full company address</FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            id="address"
                            placeholder="Full address"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div>
                  <FormField
                    control={form.control}
                    name="products"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>
                          Products/Services to Exhibit (list by category)
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Products/Services to Exhibit (list by category)"
                            className="resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex w-full gap-x-5">
                  <FormField
                    control={form.control}
                    name="registrationType"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Registration Type</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Registration type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Types</SelectLabel>
                              <SelectItem value="apple">Exhibitor</SelectItem>
                              <SelectItem value="banana">Visitor</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="boothType"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Booth Type</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select Booth types" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Booth types</SelectLabel>
                              <SelectItem value="Vitual booth only (M2)">
                                Vitual booth only (M2)
                              </SelectItem>
                              <SelectItem value="Vitual and in-person booth (M2)">
                                Vitual and in-person booth (M2)
                              </SelectItem>
                              <SelectItem value="open Space">
                                Open space (M2)
                              </SelectItem>
                              <SelectItem value="other">
                                Other (specify)
                              </SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="space-y-8">
                  <FormField
                    control={form.control}
                    name="participants"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Number of participants</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Number of Participants"
                            className="resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="other"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>
                          List any other specific requirement if any.
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="List any other specific requirement if any."
                            className="resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div>
                  <h3 className="mb-4 text-lg font-medium">
                    User terms and Conditions
                  </h3>
                  <div className="space-y-4">
                    <FormField
                      control={form.control}
                      name="terms"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                          <div className="space-y-0.5">
                            <FormLabel>Terms and Conditions</FormLabel>
                            <FormDescription>
                              By applying you agree and accept our terms and
                              conditions for the Nanenane exhibitions of 2024.
                            </FormDescription>
                          </div>
                          <FormControl>
                            <Switch
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <div className="mt-10">
                  <Button className="py-6" size="lg" disabled={isLoading!}>
                    {isLoading ? (
                      <ButtonIndicator label="Submitting" />
                    ) : (
                      "Submit Application"
                    )}
                  </Button>
                </div>
              </form>
            </Form>
            {/* <div className="flex flex-col w-full gap-y-5">
              <div className="w-full">
                <Label htmlFor="picture">
                  * Upload copy of your id or passport photo (Only JPG/PNG file)
                  - This will be used on your access badge required photo size
                  is 40MM x 40MM colored.
                </Label>
                <Input id="picture" type="file" className="mt-2" />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabContainer;
