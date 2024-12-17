import { auth } from '../actions/auth';
import LoggedInView from './loggedIn';
import LoggedOutView from './loggedOut';

export default async function Page() {
  const session = await auth();

  if (!session) {
    return <LoggedOutView />;
  }

  return <LoggedInView session={session} />;
}