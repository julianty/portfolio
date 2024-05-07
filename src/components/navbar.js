import {
  Box,
  Text,
  Group,
  Anchor,
  useComputedColorScheme,
  useMantineColorScheme,
  Switch,
} from "@mantine/core";

import { Burger, Menu } from "@mantine/core";
import { IconMoon, IconSun } from "@tabler/icons-react";
function MantineNavbar() {
  const colorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });
  const { setColorScheme } = useMantineColorScheme();
  const toggleColorScheme = () => {
    setColorScheme(colorScheme === "light" ? "dark" : "light");
  };
  return (
    <Box>
      <Group m="md" justify="space-between">
        <Anchor underline="never" href="/" c={"black"}>
          <Text
            c={colorScheme === "dark" ? "gray.2" : "gray.8"}
            size="xl"
            fw={700}
          >
            julianty
          </Text>
        </Anchor>
        <Group>
          <Switch
            checked={colorScheme === "dark" ? true : false}
            size="lg"
            onLabel={<IconSun />}
            offLabel={<IconMoon />}
            onChange={toggleColorScheme}
          />
          <Menu>
            <Menu.Target>
              <Burger opened={false} />
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Label>Navigation</Menu.Label>
              <Menu.Item component="a" href="/">
                Home
              </Menu.Item>
              <Menu.Item component="a" href="/Portfolio">
                Portfolio
              </Menu.Item>
              <Menu.Item component="a" href="/Resume">
                Resume
              </Menu.Item>
              <Menu.Divider />
              <Menu.Label>Projects</Menu.Label>
              <Menu.Item component="a" href="/projects/CorporeSano">
                Corpore Sano
              </Menu.Item>
              <Menu.Item component="a" href="/projects/SentencePerDay">
                Sentence Per Day
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
      </Group>
    </Box>
  );
}

export { MantineNavbar };
