import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/Login');

  // The below code won't execute due to the redirect
  return null;
}