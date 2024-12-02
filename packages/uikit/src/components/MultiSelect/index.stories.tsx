import React, { useState } from "react";
import { styled } from "styled-components";
import { Flex } from "../Box";
import { Column } from "../Column";
import { MultiSelect } from "./index";

export default {
  title: "Components/MultiSelect",
  component: MultiSelect,
};

const chains = [
  { label: "BNB", value: "BNB", icon: "/chains/bnb.webp" },
  { label: "Ethereum", value: "Ethereum", icon: "/chains/ethereum.webp" },
  { label: "Polygon zkEVM", value: "Polygon zkEVM", icon: "/chains/polygon.webp" },
  { label: "zkSync Era", value: "zkSync Era", icon: "/chains/zksync.png" },
  { label: "Arbitrum One", value: "Arbitrum One", icon: "/chains/arbitrum.webp" },
  { label: "Linea", value: "Linea", icon: "/chains/linea.png" },
  { label: "Base", value: "Base", icon: "/chains/base.png" },
  { label: "opBNB", value: "opbnb", icon: "/chains/bnb.webp" },
];

const Title = styled.div`
  margin-bottom: 20px;
`;

export const Default: React.FC<React.PropsWithChildren> = () => {
  return (
    <Flex
      style={{
        padding: "32px",
        alignItems: "center",
        gap: "50px",
      }}
    >
      <Column>
        <Title>MultiSelect with filter:</Title>
        <MultiSelect
          style={{
            width: "328px",
          }}
          panelStyle={{
            minHeight: "382px",
          }}
          scrollHeight="382px"
          options={chains}
          isShowFilter
          panelFooterTemplate={() => <span>Don’t see expected tokens?</span>}
        />
      </Column>
      <Column>
        <Title>MultiSelect with selectAll:</Title>
        <MultiSelect
          style={{
            width: "273px",
          }}
          scrollHeight="400px"
          options={chains}
          isShowSelectAll
          selectAllLabel="All networks"
        />
      </Column>
    </Flex>
  );
};

export const ControlledMode: React.FC<React.PropsWithChildren> = () => {
  const [selectedValue, setSelectedValue] = useState([chains[0].value]);
  return (
    <Flex
      style={{
        padding: "32px",
        alignItems: "center",
        gap: "50px",
      }}
    >
      <Column>
        <MultiSelect
          style={{
            width: "273px",
            backgroundColor: "var(--colors-input)",
          }}
          panelStyle={{
            backgroundColor: "var(--colors-input)",
          }}
          scrollHeight="380px"
          options={chains}
          isShowSelectAll
          selectAllLabel="All networks"
          value={selectedValue}
          onChange={(e) => setSelectedValue(e.value)}
        />
      </Column>
    </Flex>
  );
};
