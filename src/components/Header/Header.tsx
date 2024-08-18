import { Burger, Container, Group, rem, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import React from 'react';
import { SiLivejournal } from "react-icons/si";
import { ActionToggle } from '../ActionToggle/ActionToggle';
import * as classes from './Header.module.css';


export function Header() {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <div  className={classes.inner}>
          <SiLivejournal style={{ width: rem(30), height: rem(30) }}/>
          <Text size="lg" fw={500} mx={10}>PersonalBlog</Text>
        </div>
        <Group gap={5} visibleFrom="xs">
        <ActionToggle />
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}