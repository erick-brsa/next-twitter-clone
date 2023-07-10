import { BsHouseFill, BsBellFill } from 'react-icons/bs';
import { BiLogOut } from 'react-icons/bi';
import { FaUser } from 'react-icons/fa';

import SidebarLogo from './SidebarLogo ';
import SidebarItem from './SidebarItem ';
import SidebarTweetButton from './SidebarTweetButton';

export default function Sidebar() {
	const items = [
		{
			label: 'Home',
			href: '/',
			icon: BsHouseFill
		},
		{
			label: 'Notifications',
			href: '/notifications',
			icon: BsBellFill
		},
		{
			label: 'profile',
			href: '/users/123',
			icon: FaUser
		}
	];

	return (
		<div className="col-span-1 h-full pr-4 md:pr-1">
			<div className="flex flex-col items-end">
				<div className="space-y-2 lg:w-[230px]">
					<SidebarLogo />
					{items.map(item => (
						<SidebarItem
							key={item.href}
							href={item.href}
							label={item.label}
							icon={item.icon}
						/>
					))}
					<SidebarItem
						onClick={() => {}}
						label="Logout"
						icon={BiLogOut}
					/>
                    <SidebarTweetButton />
				</div>
			</div>
		</div>
	);
}
