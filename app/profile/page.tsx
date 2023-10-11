import Profile from '@/components/user/profile';

import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

async function ProfilePage() {
  const session = await getServerSession();
  if (!session || !session.user) {
    redirect('/auth/login');
  }
  return <Profile />;
}

export default ProfilePage;
