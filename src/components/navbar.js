import { Box, Text, Group, Anchor } from "@mantine/core";

import { Burger, Menu } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
function MantineNavbar() {
  const [opened, { toggle }] = useDisclosure();
  return (
    <Box>
      <Group m="md" justify="space-between">
        <Anchor underline="never" href="/" c={"black"}>
          <Text size="xl" fw={700}>
            julianty
          </Text>
        </Anchor>
        <Menu>
          <Menu.Target>
            <Burger opened={opened} onClick={toggle} />
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
          </Menu.Dropdown>
        </Menu>
      </Group>
    </Box>
  );
}

// export default BootstrapNavbar;
export { MantineNavbar };
