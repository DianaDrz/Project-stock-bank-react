import React from 'react';
import { Page, Document, Text, PDFViewer, Image } from '@react-pdf/renderer';
import { StockCartContext } from "../../Context";
import Layout from '../../components/Layout';
function GenerateStatement() {
  const context = React.useContext(StockCartContext);

  const currentDate = new Date();
  const formattedDate = `${currentDate.getDate()}-${currentDate.getMonth() + 1}-${currentDate.getFullYear()}`;

  return (
    <Layout>
      <PDFViewer style={{ width: '100%', height: '600px' }}>
        <Document>
         <Page size="A4" style={{padding: 50}}>
            <Text style={{color:"#003543", textAlign:'center',padding:15}}>Latinas Stock Bank</Text> 
            <Text style={{padding:10}}>A continuación se muestra el detalle actual de su cuenta:</Text> 
            <Text style={{color:"#343332",padding:10}}>Nombre Completo: {context.foundUser.fullName}</Text> 
            <Text style={{color:"#343332",padding:10}}>Usuario: {context.foundUser.userName}</Text> 
            <Text style={{color:"#343332",padding:10}}>Fondo actual: {context.userBalance}</Text> 
            <Text style={{color:"#343332",padding:10}}>Cantidad de acciones: {context.count}</Text>
            <Text style={{color:"#343332", textAlign:'center',padding:35}}>Fecha de la solicitud de impresión: {formattedDate}</Text> 
          </Page>
        </Document>
      </PDFViewer>
    </Layout>
  );
}

export default GenerateStatement;
