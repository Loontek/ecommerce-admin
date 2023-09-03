'use client';

import { UseFormReturn } from 'react-hook-form';

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { SettingsNameFormValues } from '@/app/(dashboard)/[storeId]/(routes)/settings/components/settings-form';

interface SettingsNameFormProps {
    loading: boolean;
    form: UseFormReturn<{ name: string }, any, undefined>;
    onSubmit: (data: SettingsNameFormValues) => Promise<void>;
}

export const SettingsNameForm: React.FC<SettingsNameFormProps> = ({
    loading,
    form,
    onSubmit,
}) => {
    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8 w-full"
            >
                <div className="grid grid-cols-3 gap-8">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Название</FormLabel>
                                <FormControl>
                                    <Input
                                        disabled={loading}
                                        placeholder="Название магазина"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <Button disabled={loading} type="submit" className="ml-auto">
                    Сохранить изменения
                </Button>
            </form>
        </Form>
    );
};
