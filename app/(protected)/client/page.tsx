'use client';

import { UserInfo } from '@/components/UserInfo';
import { useCurrentUser } from '@/hook/use-current-user';
import { currentUser } from '@/lib/auth';

const ClientPage = () => {
  const user = useCurrentUser();

  return <UserInfo label="💻 Client component" user={user} />;
};

export default ClientPage;
