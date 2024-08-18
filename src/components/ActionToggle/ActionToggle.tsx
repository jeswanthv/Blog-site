import { ActionIcon, Group, useComputedColorScheme, useMantineColorScheme } from '@mantine/core';
import cx from 'clsx';
import React from 'react';
import { FaMoon, FaSun } from "react-icons/fa";
import * as classes from './ActionToggle.module.css';


export function ActionToggle() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

  return (
    <Group justify="center">
      <ActionIcon
        onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
        variant="transparent"
        color={computedColorScheme === 'light' ? 'black' : 'gray'}
        size="xl"
        aria-label="Toggle color scheme"
      >
        <FaSun className={cx(classes.icon, classes.light)} />
        <FaMoon className={cx(classes.icon, classes.dark)} />
      </ActionIcon>
    </Group>
  );
}