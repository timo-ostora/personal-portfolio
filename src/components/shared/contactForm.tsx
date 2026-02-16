import { Button } from "@/components/ui/button"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"


export default function ContactForm() {

  return ( 
    <form>
      <FieldGroup>
        <div className="grid md:grid-cols-2 gap-2">
          <Field>
            <FieldLabel htmlFor="contact-form-firstName">First name</FieldLabel>
            <Input
              id="contact-form-firstName"
              placeholder="Enter your first name"
              required
            />
          </Field>
          <Field>
            <FieldLabel htmlFor="contact-form-lastName">Last name</FieldLabel>
            <Input
              id="contact-form-lastName"
              placeholder="Enter your last name"
              required
            />
          </Field>
        </div>

        <Field>
          <FieldLabel htmlFor="contact-form-email" >Email</FieldLabel>
          <Input
            id="contact-form-email"
            placeholder="Enter your email"
            type="email"
            required
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="contact-form-phone" >Phone</FieldLabel>
          <Input
            id="contact-form-phone"
            type="tel"
            placeholder="Enter your phone number"
            required
          />
        </Field>

        <Field>
          <FieldLabel htmlFor="contact-form-company" >Company</FieldLabel>
          <Input
            id="contact-form-company"
            placeholder="Which company you represent?"
          />
        </Field>

        <Field>
          <FieldLabel htmlFor="contact-form-notes">Notes</FieldLabel>
          <Textarea
            id="contact-form-notes"
            placeholder="Add any additional notes"
          />
        </Field>
        <Field orientation="horizontal">
          <Button type="submit">Submit</Button>
        </Field>
      </FieldGroup>
    </form>
  )
}