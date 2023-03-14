import Result from "../../../public/pain/results_pain.svg";
import Lips from "../../../public/pain/lips_pain.svg";
import X from "../../../public/pain/x_pain.svg";
import Chart from "../../../public/pain/chart_pain.svg";
import styled from "styled-components";

const LipsText = () => {
  return (
    <BlockText>
      <Text>Possui</Text>
      <TextBold> medo e insegurança</TextBold>
      <Text> para fazer preenchimento labial</Text>
    </BlockText>
  );
};

const ResultText = () => {
  return (
    <BlockText>
      <TextBold>Não entrega</TextBold>
      <Text> resultados satisfatórios aos clientes</Text>
    </BlockText>
  );
};

const ChartText = () => {
  return (
    <BlockText>
      <TextBold>Não tem</TextBold>
      <Text> muita procura por esse procedimento no consultório</Text>
    </BlockText>
  );
};

const XText = () => {
  return (
    <BlockText>
      <Text>Possui alto índice de</Text>
      <TextBold> intercorrências</TextBold>
    </BlockText>
  );
};

export const data = [
  {
    id: 1,
    content: <LipsText />,
    icon: Lips,
  },
  {
    id: 2,
    content: <ResultText />,
    icon: Result,
  },
  {
    id: 3,
    content: <XText />,
    icon: X,
  },
  {
    id: 4,
    content: <ChartText />,
    icon: Chart,
  },
];

const BlockText = styled.div`
  padding-left: 13px;
  min-height: 60px;
`;

const Text = styled.p`
  color: #f7f1ed;
  font-weight: 200;
  font-size: 12pt;
  display: inline;
`;

const TextBold = styled.p`
  color: #f7f1ed;
  font-weight: 600;
  font-size: 12pt;
  display: inline;
`;
