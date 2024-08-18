import { Card, Group, Text } from "@mantine/core";
import { Link } from "gatsby";
import React from "react";
import * as classes from "./VCard.module.css";

interface VCardProps {
  node: {
    id: string;
    frontmatter: {
      title: string;
      slug: string;
      tag: string;
    };
  };
}

export function VCard({ node }: VCardProps) {
  return (
    <Link to={node.frontmatter.slug} style={{ textDecoration: "none" }}>
      <Card my={5} withBorder radius="md" p={0} className={classes.card}>
        <Group wrap="nowrap" gap={0}>
          <div className={classes.body}>
            <Group wrap="nowrap" gap="xs">
              <Text tt="uppercase" c="dimmed" fw={700} size="xs">
                {node.frontmatter.tag}
              </Text>
              <Text size="xs" c="dimmed">
                •
              </Text>
              <Text size="xs" c="dimmed">
                Feb 6th
              </Text>
            </Group>

            <Text className={classes.title} mt="xs" mb="md">
              {node.frontmatter.title}
            </Text>
          </div>
        </Group>
      </Card>
    </Link>
  );
}
