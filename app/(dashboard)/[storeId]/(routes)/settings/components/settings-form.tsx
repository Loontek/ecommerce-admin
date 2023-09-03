'use client';

import { Store } from '@prisma/client';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useOrigin } from '@/hooks/use-origin';
import axios from 'axios';
import toast from 'react-hot-toast';

import { SettingsHeader } from '@/app/(dashboard)/[storeId]/(routes)/settings/components/settings-header';
import { Separator } from '@/components/ui/separator';
import { AlertModal } from '@/components/modals/alert-modal';
import { ApiAlert } from '@/components/ui/api-alert';
import { SettingsNameForm } from '@/app/(dashboard)/[storeId]/(routes)/settings/components/settings-name-form';

interface SettingsFormProps {
    initialData: Store;
}

const nameFormSchema = z.object({
    name: z.string().min(1),
});

export type SettingsNameFormValues = z.infer<typeof nameFormSchema>;

export const SettingsForm: React.FC<SettingsFormProps> = ({ initialData }) => {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const origin = useOrigin();
    const params = useParams();
    const router = useRouter();
    const nameForm = useForm<SettingsNameFormValues>({
        resolver: zodResolver(nameFormSchema),
        defaultValues: initialData,
    });

    const onSubmit = async (data: SettingsNameFormValues) => {
        try {
            setLoading(true);
            await axios.patch(`/api/stores/${params.storeId}`, data);
            router.refresh();
            toast.success('Магазин обновлён');
        } catch (e) {
            toast.error('Что-то пошло не так.');
        } finally {
            setLoading(false);
        }
    };

    const onDelete = async () => {
        try {
            setLoading(true);
            await axios.delete(`/api/stores/${params.storeId}`);
            router.refresh();
            router.push('/');
            toast.success('Магазин удалён');
        } catch (e) {
            toast.error('Убедитесь, что вы удалили все продукты и категории');
        } finally {
            setLoading(false);
            setOpen(false);
        }
    };

    return (
        <>
            <AlertModal
                isOpen={open}
                onClose={() => setOpen(false)}
                onConfirm={onDelete}
                loading={loading}
            />
            <SettingsHeader disabled={loading} onClick={() => setOpen(true)} />
            <Separator />
            <SettingsNameForm
                loading={loading}
                form={nameForm}
                onSubmit={onSubmit}
            />
            <Separator />
            <ApiAlert
                title={'NEXT_PUBLIC_API_URL'}
                description={`${origin}/api/${params.storeId}`}
                variant="public"
            />
        </>
    );
};
