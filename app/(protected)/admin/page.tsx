'use client';

import { admin } from '@/actions/admin';
import { RoleGate } from '@/components/auth/RoleGate';
import { FormSuccess } from '@/components/FormSuccess';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { UserRole } from '@prisma/client';
import { toast } from 'sonner';

const AdminPage = async () => {
  const onServerActionClick = () => {
    admin().then((res) => {
      if (res.error) {
        toast.error(res.error);
      } else {
        toast.success('Allowed Server Action');
      }
    });
  };

  const onApiRouteClick = async () => {
    fetch('/api/admin').then((res) => {
      if (res.ok) {
        toast.success('Allowed API Route');
      } else {
        toast.error('Failed API Route');
      }
    });
  };

  return (
    <Card className="w-[600px]">
      <CardHeader>
        <p className="text-center text-2xl font-semibold">🔑 Admin</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <RoleGate allowedRoles={UserRole.ADMIN}>
          <FormSuccess message="You are authorized to access this page" />
        </RoleGate>
        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-md">
          <p className="text-sm font-medium">Admin-only API Route</p>
          <Button onClick={onApiRouteClick}>Click to Test</Button>
        </div>
        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-md">
          <p className="text-sm font-medium">Admin-only Server Actions</p>
          <Button onClick={onServerActionClick}>Click to Test</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AdminPage;
