import PageTitle from "@/shared/components/common/page-title";
import PoliticTitle from "./components/politic-privacy/politic-title";
import Container from "@/shared/components/common/container/container";
import PoliticListContent from "./components/politic-privacy/politic-list-content";
import PoliticContentWrapper from "./components/politic-privacy/politic-content-wrapper";

export default function PoliticsAndPrivacyPage() {
  return (
    <main className="w-full py-[50px]">
      <Container className="flex flex-col items-start gap-6">
        <div className="text-center w-full">
          <PageTitle>TERMOS DE PRIVACIDADE</PageTitle>
        </div>

        <PoliticContentWrapper>
          <PoliticTitle>Política de Privacidade</PoliticTitle>
          <p>
            A sua privacidade é importante para nós, e estamos comprometidos em
            proteger as suas informações pessoais. Seremos claros e abertos
            sobre os motivos pelos quais recolhemos as suas informações pessoais
            e como as utilizamos. Quando houver opções ou direitos disponíveis,
            explicaremos isso a si. Esta Política de Privacidade explica como a
            Lotaria Nacional Angola utiliza as suas informações pessoais
            enquanto utiliza o nosso website.
          </p>
        </PoliticContentWrapper>

        <PoliticContentWrapper>
          <PoliticTitle>Informações Pessoais Identificávei</PoliticTitle>
          <p>
            Recolhemos estas informações no processo de criação de conta,
            realização de apostas e utilização dos serviços do website. Estas
            informações são necessárias para lhe dar acesso a determinadas
            partes do nosso website e serviços relacionados. Estas informações
            são recolhidas quando:
          </p>
          <PoliticListContent>
            <li>Regista uma conta na Lotaria Nacional</li>
            <li>As fornece voluntariamente ao utilizar o website</li>
            <li>Divulga as informações em áreas públicas do website</li>
            <li>
              As fornece ao contactar a nossa equipa de suporte ao cliente
            </li>
          </PoliticListContent>
          <span>As informações incluem:</span>
          <PoliticListContent>
            <li>Nome de utilizador</li>
            <li>Nome e apelido </li>
            <li>Data de nascimento</li>
            <li>Endereço de email</li>
            <li>Morada de residência</li>
            <li>Número de telefone</li>
            <li>Morada de faturação</li>
            <li>Documentos de identificação</li>
            <li>Comprovativos de morada</li>
            <li>Histórico de transações</li>
            <li>Preferências de utilização do website</li>
            <li>
              Quaisquer outras informações que nos forneça ao utilizar as nossas
              plataformas
            </li>
            <li>
              informações que nos forneça ao utilizar as nossas plataformas
            </li>
            <li>
              Dados de cartões de crédito/débito ou outras informações de
              pagamento
            </li>
          </PoliticListContent>
          <p>
            Estas informações também são necessárias para fins de faturação e
            proteção de menores. Pode alterar e atualizar estas informações ao
            contactar o Suporte ao Cliente. Estes dados são de uso exclusivo
            interno e nunca são partilhados com terceiros, exceto conforme
            descrito abaixo.
          </p>
        </PoliticContentWrapper>

        <PoliticContentWrapper>
          <PoliticTitle>
            Informações Não Identificáveis Pessoalmente e Análise de Tráfego
          </PoliticTitle>
          <p>
            A Lotaria Nacional Angola esforça-se por tornar o nosso website o
            mais intuitivo e acessível possível. Recolhemos dados sobre como
            utiliza o site, que não o identificam pessoalmente. Quando interage
            com os serviços, os nossos servidores registam informações
            administrativas e de tráfego, incluindo:
          </p>
          <PoliticListContent>
            <li>Endereço IP de origem</li>
            <li>Hora e data de acesso</li>
            <li>Páginas visitadas</li>
            <li>Idioma utilizado</li>
            <li>Relatórios de falhas de software</li>
            <li>Tipo de navegador utilizado</li>
          </PoliticListContent>
          <p>
            Estas informações são essenciais para a qualidade dos nossos
            serviços.
          </p>
        </PoliticContentWrapper>

        <PoliticContentWrapper>
          <PoliticTitle>Cookies</PoliticTitle>
          <p>
            A Lotaria Nacional Angola utiliza cookies para garantir o
            funcionamento eficiente do website e melhorar a sua experiência nas
            nossas plataformas. Mais informações estão disponíveis na nossa
            Política de Cookies.
          </p>
          <PoliticTitle>
            Como e Por Que Utilizamos as Suas Informações Pessoais
          </PoliticTitle>
          <p>
            Utilizamos as suas informações pessoais de diversas formas,
            agrupadas nas seguintes categorias:
          </p>
          <PoliticListContent>
            <li>Para lhe fornecer os produtos ou serviços que solicitou</li>
            <li>Para cumprir obrigações legais ou regulatórias</li>
            <li>Para monitorizar o desempenho do nosso website</li>
            <li>Para enviar informações de marketing</li>
          </PoliticListContent>
        </PoliticContentWrapper>

        <PoliticContentWrapper>
          <PoliticTitle>Fornecimento de Produtos e Serviços</PoliticTitle>
          <p>
            As suas informações pessoais são utilizadas para que possa usar o
            website, criar a sua conta, participar no casino online e receber
            assistência ao cliente. Partilhamos estas informações com
            organizações externas que atuam em nosso nome. Mais informações
            estão disponíveis na secção Partilha de Informações.
          </p>
          <p>
            Caso não deseje que as suas informações sejam utilizadas desta
            forma, a opção será não utilizar os nossos serviços e encerrar a sua
            conta.
          </p>
        </PoliticContentWrapper>

        <PoliticContentWrapper>
          <PoliticTitle>Requisitos Legais e Regulamentares</PoliticTitle>
          <p>
            A Lotaria Nacional Angola utiliza documentos de identificação e
            comprovativos de morada para proteger os utilizadores de
            comportamentos fraudulentos e promover o jogo responsável. Também
            podemos realizar análises de segurança para validar os dados de
            registo e verificar transações financeiras para garantir o
            cumprimento das nossas condições gerais e da legislação aplicável.
          </p>
          <p>
            Se não concordar com estas práticas, não poderemos fornecer os
            nossos serviços e a opção será encerrar a sua conta.
          </p>
        </PoliticContentWrapper>

        <PoliticContentWrapper>
          <PoliticTitle>Monitorização do Desempenho do Website</PoliticTitle>
          <p>
            Utilizamos cookies e análise de tráfego para melhorar o desempenho
            do website. Estas atividades são do nosso legítimo interesse, mas
            minimizamos o impacto na sua privacidade. Pode gerir as suas
            preferências de cookies ou encerrar a sua conta se desejar.
          </p>
        </PoliticContentWrapper>

        <PoliticContentWrapper>
          <PoliticTitle>Marketing</PoliticTitle>
          <p>
            Com o seu consentimento, enviamos ofertas e promoções via email, SMS
            ou online. Não partilhamos as suas informações com terceiros para
            fins de marketing. Pode retirar o seu consentimento ou atualizar as
            suas preferências a qualquer momento.
          </p>
        </PoliticContentWrapper>

        <PoliticContentWrapper>
          <PoliticTitle>Os Seus Direitos</PoliticTitle>
          <PoliticListContent>
            <li>
              Correção de Dados: Se acreditar que as informações que temos estão
              incorretas, pode solicitar a sua correção ao contactar a Lotaria
              Nacional Angola
            </li>
            <li>
              Acesso aos Dados: Pode solicitar uma cópia das informações
              pessoais que temos. Para garantir a segurança, será necessário
              fornecer um comprovativo válido de identidade
            </li>
            <li>
              Eliminação de Dados: Pode solicitar a eliminação dos seus dados
              pessoais, salvo em casos onde seja necessário cumprir obrigações
              legais ou regulatórias
            </li>
          </PoliticListContent>
        </PoliticContentWrapper>

        <PoliticContentWrapper>
          <PoliticTitle>Partilha de Informações Pessoais</PoliticTitle>
          <p>Podemos partilhar os seus dados com terceiros:</p>
          <PoliticListContent>
            <li>Para cumprir obrigações legais</li>
            <li>Para executar os termos desta política</li>
            <li>
              Com fornecedores externos que prestem serviços em nosso nome
            </li>
            <li>
              Para proteger direitos, propriedades ou a segurança de terceiros
            </li>
            <li>
              Para investigação sobre a prevenção do vício, de forma anonimizada
            </li>
          </PoliticListContent>
        </PoliticContentWrapper>

        <PoliticContentWrapper>
          <PoliticTitle>Segurança</PoliticTitle>
          <p>
            Armazenamos as suas informações de forma encriptada e protegida, com
            tecnologia firewall avançada. Implementamos medidas para garantir
            que subsidiárias, agentes e fornecedores mantêm os padrões de
            segurança necessários.
          </p>
        </PoliticContentWrapper>

        <PoliticContentWrapper>
          <PoliticTitle>Retenção de Dados</PoliticTitle>
          <p>
            Retemos as suas informações pelo tempo necessário para fins legais
            ou comerciais. Após este período, os dados são eliminados de forma
            segura.
          </p>
        </PoliticContentWrapper>

        <PoliticContentWrapper>
          <PoliticTitle>Alterações a Esta Política</PoliticTitle>
          <p>
            Podemos alterar periodicamente esta Política de Privacidade.
            Recomendamos que a reveja regularmente.
          </p>
          <p>
            Se não concordar com os termos desta política, deve cessar o uso do
            nosso website. O uso continuado será considerado como aceitação das
            condições.
          </p>
          <span className="italic">Versão 1.0 datada de 11/01/2025</span>
        </PoliticContentWrapper>
      </Container>
    </main>
  );
}
