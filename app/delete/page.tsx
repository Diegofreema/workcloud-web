'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import {
  AccountDeletionFormData,
  accountDeletionSchema,
} from '@/lib/validation';
import { AlertTriangle, ArrowLeft, CheckCircle, Trash2 } from 'lucide-react';
import Link from 'next/link';

// Mock user data - replace with actual auth

export default function DeleteAccountPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<AccountDeletionFormData>({
    resolver: zodResolver(accountDeletionSchema),
    defaultValues: {
      email: '',
      confirmEmail: '',
      reason: '',
      feedback: '',
      confirmation: false,
    },
  });

  const onSubmit = async (data: AccountDeletionFormData) => {
    setIsLoading(true);
    try {
      toast.success('Account deletion request submitted successfully.');
      console.log(data);

      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting deletion request:', error);
      form.setError('root', {
        message:
          error instanceof Error
            ? error.message
            : 'An error occurred. Please try again.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <CardTitle className="text-green-600">
                  Request Submitted Successfully
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Your account deletion request has been submitted successfully.
              </p>
              <p>
                Our team will review your request and contact you at{' '}
                <strong>{form.getValues('email')}</strong> within 5-7 business
                days.
              </p>
              <p className="text-sm text-gray-600">
                You can continue using your account normally until the deletion
                is processed.
              </p>
              <div className="flex gap-4">
                <Button asChild variant="outline">
                  <Link href="/dashboard">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Dashboard
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-2xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center">
            <div className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold text-xl">
              WKC
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">
            Delete Your WorkCloud Account
          </h1>
          <p className="text-gray-600">
            We&apos;re sorry to see you go. Please review the information below
            before proceeding.
          </p>
        </div>

        {/* Warning Alert */}
        <Alert className="border-red-200 bg-red-50">
          <AlertTriangle className="h-4 w-4 text-red-600" />
          <AlertTitle className="text-red-800">
            Important: This action cannot be undone
          </AlertTitle>
          <AlertDescription className="text-red-700">
            Deleting your account will permanently remove all your data,
            including:
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Your profile and account information</li>
              <li>All projects and workspaces</li>
              <li>Collaboration history and shared files</li>
              <li>Subscription and billing information</li>
            </ul>
          </AlertDescription>
        </Alert>

        {/* Deletion Form */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trash2 className="h-5 w-5 text-red-600" />
              Account Deletion Request
            </CardTitle>
            <CardDescription>
              Please fill out this form to request account deletion. Our team
              will review your request within 5-7 business days.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                {/* Email Confirmation */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">
                    Confirm Your Identity
                  </h3>
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your email address"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          Enter the email address associated with your account
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="confirmEmail"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Confirm Email Address</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Confirm your email address"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <Separator />

                {/* Reason for Deletion */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">
                    Help Us Improve (Optional)
                  </h3>
                  <FormField
                    control={form.control}
                    name="reason"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Reason for leaving</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a reason (optional)" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="not-using">
                              Not using the service anymore
                            </SelectItem>
                            <SelectItem value="too-expensive">
                              Too expensive
                            </SelectItem>
                            <SelectItem value="missing-features">
                              Missing features I need
                            </SelectItem>
                            <SelectItem value="found-alternative">
                              Found a better alternative
                            </SelectItem>
                            <SelectItem value="privacy-concerns">
                              Privacy concerns
                            </SelectItem>
                            <SelectItem value="technical-issues">
                              Technical issues
                            </SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="feedback"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Additional feedback</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us more about your experience or what we could improve..."
                            className="min-h-[100px]"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          Your feedback helps us improve WorkCloud for other
                          users
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <Separator />

                {/* Confirmation */}
                <FormField
                  control={form.control}
                  name="confirmation"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-sm font-medium">
                          I understand that this action cannot be undone
                        </FormLabel>
                        <FormDescription>
                          By checking this box, you confirm that you understand
                          all data will be permanently deleted and this action
                          cannot be reversed.
                        </FormDescription>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />

                {form.formState.errors.root && (
                  <Alert className="border-red-200 bg-red-50">
                    <AlertTriangle className="h-4 w-4 text-red-600" />
                    <AlertDescription className="text-red-700">
                      {form.formState.errors.root.message}
                    </AlertDescription>
                  </Alert>
                )}

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    asChild
                    className="flex-1 bg-transparent"
                  >
                    <Link href="/dashboard">
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Cancel
                    </Link>
                  </Button>
                  <Button
                    type="submit"
                    variant="destructive"
                    disabled={isLoading}
                    className="flex-1"
                  >
                    {isLoading ? (
                      'Submitting...'
                    ) : (
                      <>
                        <Trash2 className="h-4 w-4 mr-2" />
                        Submit Deletion Request
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
