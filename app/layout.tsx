import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Sidebar from '@/components/Sidebar';
import FollowBar from '@/components/FollowBar';
import LoginModal from '@/components/modals/LoginModal';
import RegisterModal from '@/components/modals/RegisterModal';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Twitter Clone',
	description:
		'Twitter cclone with React, Tailwind, Next, Prisma, Mongo, NextAuth & Vercel'
};

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="es">
			<body className={inter.className}>
				<LoginModal />
				<RegisterModal />
				<div className="h-screen bg-black">
					<div className="container h-full mx-auto xl:px-30 max-w-6xl">
						<div className="grid grid-cols-4 h-full">
							<Sidebar />
							<div className="col-span-3 lg:col-span-2 border-x-[1px] border-neutral-800">
								{children}
							</div>
							<FollowBar />
						</div>
					</div>
				</div>
			</body>
		</html>
	);
}
