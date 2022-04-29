import './App.css';
import React, { useState } from 'react';
import {
	AppShell,
	Navbar,
	Header,
	Footer,
	Aside,
	Text,
	MediaQuery,
	Burger,
	useMantineTheme,
	Button,
  Group,
  Paper,
  Divider,
  UnstyledButton,
  Avatar,
} from '@mantine/core';
import { Calendar } from '@mantine/dates';
import {
	Home,
	CalendarTime,
	UserOff,
	Users,
	DoorExit
} from 'tabler-icons-react';

export default function AppShellHome() {
	const theme = useMantineTheme();
	const [opened, setOpened] = useState(false);
  const [studentsAbsent, setStudentsAbsent] = useState(12);
  const [studentsTardy, setStudentsTardy] = useState(25);
	return (
		<AppShell
			styles={{
				main: {
					background:
						theme.colorScheme === 'dark'
							? theme.colors.dark[8]
							: theme.colors.gray[0]
				}
			}}
			navbarOffsetBreakpoint="sm"
			asideOffsetBreakpoint="sm"
			fixed
			navbar={
				<Navbar
					p="md"
					hiddenBreakpoint="sm"
					hidden={!opened}
					width={{ sm: 200, lg: 300 }}
				>
					<Navbar.Section grow mt="lg">
						<a
							class="hiddenLink"
							href="https://Attendance-App-admin-page.ignacioloaiza.repl.co"
						>
						<Button leftIcon={<Home size={24} />} class="currentbutton">
							Home
						</Button></a>

						<a className="hiddenLink" href="https://attendance-app-schedule.o0taliyah0o.repl.co/" ><Button leftIcon={<CalendarTime size={24} />} class="sidebutton">
							Schedule
						</Button></a>

						<Button leftIcon={<UserOff size={24} />} class="sidebutton">
							Absences
						</Button>

						<Button leftIcon={<Users size={24} />} class="sidebutton">
							Students
						</Button>
					</Navbar.Section>
          
          {/*Section 2*/}

          <UnstyledButton className="userinfo">
            <Group>
        <Avatar size="md" color="orange">PN</Avatar>
        <div>
          <Text size="lg">Parent Name</Text>
          <Text size="sm" color="gray">parent@email.com</Text>
        </div>
      </Group>
            </UnstyledButton>
          
					<a className="logoutLink" href="https://attendance-app.ignacioloaiza.repl.co/">
						<Navbar.Section>
							<Button leftIcon={<DoorExit size={24} />} class="logoutbutton">
								Log Out
							</Button>
						</Navbar.Section>
					</a>
				</Navbar>
			}
			header={
				<Header height={70} p="md">
					<div
						style={{ display: 'flex', alignItems: 'center', height: '100%' }}
					>
						<MediaQuery largerThan="sm" styles={{ display: 'none' }}>
							<Burger
								opened={opened}
								onClick={() => setOpened(o => !o)}
								size="sm"
								color={theme.colors.gray[6]}
								mr="xl"
							/>
						</MediaQuery>
						<img
							style={{ height: 40, marginRight: 20 }}
							src="./src/images/dtech_icon.png"
						/>
						<Text style={{ fontSize: 24 }}>
							<strong>Design Tech High School Attendance</strong>
						</Text>
					</div>
				</Header>
			}
		>
			<Text className="greeting">Greetings, admin</Text>
      <p>Today is Friday, April 29, 2022</p>
      <Group position="center" spacing="lg" grow>
      <Paper shadow="md" radius="lg" p="sm">
      <Text size="xl">Expected Number of Students Present:</Text>
      <h2>
        {550-studentsAbsent}
      </h2>
    </Paper>
        <Paper shadow="md" radius="lg" p="sm">
      <Text size="xl">Reported Number of Absences:</Text>
      <h2>
        {studentsAbsent}
      </h2>
    </Paper>
        <Paper shadow="md" radius="lg" p="sm">
      <Text size="xl">Reported Number of Tardies:</Text>
      <h2>
        {studentsTardy}
      </h2>
    </Paper>
    </Group>
      <Divider my="xl" />
      <a href="https://docs.google.com/spreadsheets/d/15LiLBBJU7iPVuSV-iSGZiSO6pSxtV7CXWZY4wU3-Qr4/edit?usp=sharing">
      <Button size="xl" color="orange" variant="outline">
      View Data
      </Button>
        </a>
		</AppShell>
	);
}
