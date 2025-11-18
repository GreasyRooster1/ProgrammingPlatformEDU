import React from 'react';
import {Button, AlertDialog, Flex} from "@radix-ui/themes";

function AssetUpload(props) {
    return (
        <AlertDialog.Root>
            <AlertDialog.Trigger>
                {props.children ?? <Button>Upload Files</Button>}
            </AlertDialog.Trigger>
            <AlertDialog.Content maxWidth="450px">
                <AlertDialog.Title>Upload file</AlertDialog.Title>
                <AlertDialog.Description size="2">
                    Drag and drop files here
                </AlertDialog.Description>

                <Flex gap="3" mt="4" justify="end">
                    <AlertDialog.Cancel>
                        <Button variant="soft" color="gray">
                            Cancel
                        </Button>
                    </AlertDialog.Cancel>
                    <AlertDialog.Action>
                        <Button variant="solid">
                            Upload
                        </Button>
                    </AlertDialog.Action>
                </Flex>
            </AlertDialog.Content>
        </AlertDialog.Root>
    );
}

export default AssetUpload;