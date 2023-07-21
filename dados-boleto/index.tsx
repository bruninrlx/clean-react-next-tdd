import React, { useEffect, useState, useContext } from "react";
import Router from "next/router";

//Styles
import StyleContainer from "./styles";

//Components
import Esteirabase from "../../../../components/esteira-base/esteira-base";

//MUI
import { Divider, Grid, Typography, Skeleton } from "@mui/material";

//Services
import moment from "moment";
import { RequestIdsContext } from "../../../../contexts/RequestIdsContext";
import HeadComponent from "../../../../components/HeadLogin";
import { EncryptSessionStorage } from "../../../../utils/encryptSessionStorage/encryptSessionStorage";
import type { DadosBoleto } from "../../../../types/DadosBoleto";

export default function DadosDoBoleto() {
  const requestIdsContext = useContext(RequestIdsContext);

  const [detalhes, setDetalhes] = useState([
    {
      title: "Beneficiário",
      value: ""
    }, {
      title: "Pagador",
      value: ""
    },
    {
      title: "Vencimento",
      value: ""
    }, {
      title: "Valor",
      value: ""
    },
  ]);

  const codBoleto = Router.query?.codBoleto || "";

  const dadosBoleto: DadosBoleto = new EncryptSessionStorage().getDecryptData("dados-boleto")

  useEffect(() => {
    if (dadosBoleto) {
      requestIdsContext.setBoletoId(dadosBoleto?.data?.boletoId);
      requestIdsContext.setCnpjParceiro(dadosBoleto?.data?.beneficiario?.cnpj);
      requestIdsContext.setCnpj(dadosBoleto?.data?.empresa?.cnpj);
      requestIdsContext.setCodBoleto(codBoleto.toString());

      const aux = detalhes.map(({ title }) => {
        switch (title) {
          case "Beneficiário":
            return { title: title, value: dadosBoleto?.data?.beneficiario?.razaoSocial || "" }
          case "Pagador":
            return { title: title, value: dadosBoleto?.data?.empresa?.razaoSocial || "" }
          case "Valor":
            return { title: title, value: dadosBoleto?.data?.boleto?.valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) || "" }
          case "Vencimento":
            return { title: title, value: moment(dadosBoleto?.data?.boleto?.vencimentoBoleto).format("DD/MM/YYYY") || "" }
          default:
            return { title: title, value: "" }
        }
      })

      setDetalhes(aux)
      new EncryptSessionStorage().encryptData(dadosBoleto?.data?.empresa?.razaoSocial, "socialReason");
    }
  }, [])

  return (
    <Esteirabase pathBack="/boleto/parcelamento/codigo" title="Continuar" onClick={() => Router.push('/boleto/parcelamento/preenchimento-dados')}>
      <HeadComponent title="Dados do boleto" />
      <StyleContainer>
        <Grid container justifyContent="center" alignItems="center" alignContent="flex-start">
          <Grid item xs={10} sm={11} className="dados-title">
            <Typography variant="h5">
              Agora, confira os dados do seu boleto bancário. Atente-se ao valor e data de vencimento.
            </Typography>
          </Grid>
          {detalhes.map(({ title, value }, index) => (
            <Grid item xs={10} sm={11} key={index}>
              <Typography variant="subtitle1" className="span-left">{title}</Typography>
              <Typography variant="body1" className="span-right">{value}</Typography>
              <Divider />
            </Grid>
          ))}
        </Grid>
      </StyleContainer>
    </Esteirabase>
  );
}
