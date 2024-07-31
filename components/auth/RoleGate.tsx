'use client';

import { useCurrentRole } from '@/hook/use-current-role';
import { UserRole } from '@prisma/client';
import { FormError } from '../FormError';

interface RoleGateProps {
  children: React.ReactNode;
  allowedRoles: UserRole;
}

export const RoleGate = ({ allowedRoles, children }: RoleGateProps) => {
  const role = useCurrentRole();

  if (role !== allowedRoles) {
    return <FormError message="You are not authorized to access this page" />;
  }

  return children;
};
