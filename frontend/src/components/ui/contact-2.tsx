import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail } from "lucide-react";

interface Contact2Props {
  title?: string;
  description?: string;
  email?: string;
}

export const Contact2 = ({
  title = "Contact Us",
  description = "We are available for questions, feedback, or collaboration opportunities. Let us know how we can help!",
  email,
}: Contact2Props) => {
  const [formData, setFormData] = React.useState({
    firstname: '',
    lastname: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = `mailto:${email}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Формируем mailto ссылку с данными формы
    const mailtoLink = `mailto:${email || 'vry@improvado.io'}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `From: ${formData.firstname} ${formData.lastname}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    window.location.href = mailtoLink;
    
    // Очищаем форму после отправки
    setFormData({
      firstname: '',
      lastname: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  return (
    <section className="py-32 relative">
      <div className="container">
        <div className="mx-auto flex max-w-screen-xl flex-col justify-between gap-10">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="mb-2 text-5xl font-semibold lg:mb-1 lg:text-6xl">
              {title}
            </h1>
            <p className="text-muted-foreground">{description}</p>
            {email && (
              <button
                onClick={handleEmailClick}
                className="mt-4 inline-flex items-center gap-2 text-lg font-medium text-primary hover:underline transition-colors cursor-pointer relative z-10 bg-transparent border-none p-2"
                type="button"
              >
                <Mail className="h-5 w-5" />
                {email}
              </button>
            )}
          </div>
          
          <form onSubmit={handleSubmit} className="mx-auto flex w-full max-w-screen-md flex-col gap-6 rounded-lg border p-10 relative z-10">
            <div className="flex gap-4">
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="firstname">First Name</Label>
                <Input 
                  type="text" 
                  id="firstname" 
                  placeholder="First Name" 
                  className="relative z-10"
                  value={formData.firstname}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="lastname">Last Name</Label>
                <Input 
                  type="text" 
                  id="lastname" 
                  placeholder="Last Name" 
                  className="relative z-10"
                  value={formData.lastname}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input 
                type="email" 
                id="email" 
                placeholder="Email" 
                className="relative z-10"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="subject">Subject</Label>
              <Input 
                type="text" 
                id="subject" 
                placeholder="Subject" 
                className="relative z-10"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="grid w-full gap-1.5">
              <Label htmlFor="message">Message</Label>
              <Textarea 
                placeholder="Type your message here." 
                id="message" 
                className="relative z-10"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <Button 
              type="submit"
              className="w-full relative z-10 cursor-pointer"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

