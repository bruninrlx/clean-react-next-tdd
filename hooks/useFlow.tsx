import React from "react";
import Router from "next/router";
import ShowModal from "../components/modal";

export default function validateFollowingTheFlow() {
  if (!sessionStorage.getItem("requisitionContent")) {
    return <ShowModal
      title_modal="Ops, não é por aqui que começa!"
      desc_modal={<>Parece que não está seguindo o fluxo corretamente. <br /> Estamos te redirecionando para o início.</>}
      text_btn="Fechar"
      open={true}
      btn_action={() => {
        Router.push("/iniciar")
      }}
    />
  } else {
    return <></>
  }
}