'use client';

import authenticatedVar from '@/components/providers/authenticated';
import Profile from '@/components/user/profile';
import { useReactiveVar } from '@apollo/client';
import { useRouter } from 'next/navigation';

function ProfilePage() {
  const authenticated = useReactiveVar(authenticatedVar);
  const router = useRouter();
  if (!authenticated) {
    router.push('/auth/login');
  }
  return <Profile />;
}

export default ProfilePage;
