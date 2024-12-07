"use client";
import Image from "next/image";
import styled from "styled-components";

const ImageBackground = styled.div`
  display: flex;
  padding: 16px;
  background-color: #081014;
`;
const Text = styled.div`
  padding: 16px;
`;

export default function Home() {
  return (
    <>
      <ImageBackground>
        <Image
          src="/app-logo.svg"
          alt="Emitwise Logo"
          width={20}
          height={20}
          priority
        />
      </ImageBackground>
      <Text>Antwerp plant</Text>
    </>
  );
}
