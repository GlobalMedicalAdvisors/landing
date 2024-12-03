"use client";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PhoneInput } from "./phone-input";

const formSchema = z.object({
  phone: z.string().refine(
    (value) => {
      const phoneNumber = parsePhoneNumberFromString(value);
      return phoneNumber && phoneNumber.isValid();
    },
    { message: "Invalid phone number" }
  ),
});

const WaitlistForm = () => {
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  return (
    <Form {...form}>
      {" "}
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <PhoneInput {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export const ResponsiveWaitlistModal = ({
  children,
}: React.PropsWithChildren) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Join our waitlist</DialogTitle>
          <DialogDescription>
            Be among the first to receive updates about our upcoming mobile app.
          </DialogDescription>
        </DialogHeader>
        <WaitlistForm />
      </DialogContent>
    </Dialog>
  );
};
