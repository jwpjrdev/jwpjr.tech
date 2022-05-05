import { Box, Heading, ActionMenu, ActionList } from "@primer/react";

export default function Index() {
  return (
    <Box m={4} borderColor="border.default" borderWidth={1} borderStyle="solid" p={3}>
      <Heading sx={{mb: 2}}>Welcome to Remix (With Styled Component)</Heading>
      <ActionMenu>
        <ActionMenu.Button>Menu</ActionMenu.Button>

        <ActionMenu.Overlay>
          <ActionList>
            <ActionList.Item onSelect={event => console.log('New file')}>New file</ActionList.Item>
            <ActionList.Item>Copy link</ActionList.Item>
            <ActionList.Item>Edit file</ActionList.Item>
            <ActionList.Divider />
            <ActionList.Item variant="danger">Delete file</ActionList.Item>
          </ActionList>
        </ActionMenu.Overlay>
      </ActionMenu>
    </Box>
  );
}
