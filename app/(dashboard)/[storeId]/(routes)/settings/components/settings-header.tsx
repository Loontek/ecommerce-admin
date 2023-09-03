'use client';

import { Store } from '@prisma/client';
import { Heading } from '@/components/ui/heading';
import { Button } from '@/components/ui/button';
import { Trash } from 'lucide-react';

interface SettingsHeaderProps {
    disabled: boolean;
    onClick: () => void;
}

export const SettingsHeader: React.FC<SettingsHeaderProps> = ({
    disabled,
    onClick,
}) => {
    return (
        <div className="flex items-center justify-between">
            <Heading
                title="Настройки"
                description="Управление настройками магазина"
            />
            <Button
                disabled={disabled}
                variant="destructive"
                size="sm"
                onClick={() => onClick()}
            >
                <Trash className="h-4 w-4" />
            </Button>
        </div>
    );
};
