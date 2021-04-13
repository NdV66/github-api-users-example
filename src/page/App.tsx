import { QueryClient, QueryClientProvider } from 'react-query';
import { Container } from 'reactstrap';

import StoreContextWrapper from '../store/context';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';

const queryClient = new QueryClient();

const App = () => (
    <QueryClientProvider client={queryClient}>
        <StoreContextWrapper>
            <Container>
                <header data-testid="header">
                    <Header />
                </header>
            </Container>

            <Container>
                <main className="min-height" data-testid="main">
                    <Main />
                </main>
            </Container>

            <Container>
                <footer data-testid="footer">
                    <Footer />
                </footer>
            </Container>
        </StoreContextWrapper>
    </QueryClientProvider>
);

export default App;
