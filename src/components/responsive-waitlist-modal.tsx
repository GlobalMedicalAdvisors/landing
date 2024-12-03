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
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { PhoneInput } from "./phone-input";
import { useMediaQuery } from "usehooks-ts";
import { useFormspark } from "@formspark/use-formspark";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
const formSchema = z.object({
  phone: z.string().refine(
    (value) => {
      const phoneNumber = parsePhoneNumberFromString(value);
      return phoneNumber && phoneNumber.isValid();
    },
    { message: "Invalid phone number" }
  ),
});

type WaitlistFormProps = {
  classNames?: string;
};
const WaitlistForm = ({ classNames }: WaitlistFormProps) => {
  const [submit, submitting] = useFormspark({
    formId: process.env.NEXT_PUBLIC_FORMSPARK_FORM_ID!,
  });
  const { toast } = useToast();
  async function onSubmit(values: z.infer<typeof formSchema>) {
    await submit({ phoneNumber: values.phone })
      .then(() => form.reset())
      .then(() =>
        toast({
          title: "Congratulations!",
          description: "You're now on the waitlist!",
        })
      );
  }
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("grid items-start gap-4", classNames)}
      >
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <PhoneInput placeholder="Enter your phone number" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={submitting} type="submit">
          Submit
        </Button>
      </form>
    </Form>
  );
};

export const ResponsiveWaitlistModal = ({
  children,
}: React.PropsWithChildren) => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Join our waitlist</DialogTitle>
            <DialogDescription>
              Be among the first to receive updates about our upcoming mobile
              app.
            </DialogDescription>
          </DialogHeader>
          <WaitlistForm />
        </DialogContent>
      </Dialog>
    );
  }
  return (
    <Drawer>
      <DrawerTrigger asChild>{children}</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Join our waitlist</DrawerTitle>
          <DrawerDescription>
            Be among the first to receive updates about our upcoming mobile app.
          </DrawerDescription>
        </DrawerHeader>
        <WaitlistForm classNames="px-4" />
        <DrawerFooter>
          <DrawerClose>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
