import { QueryClient, QueryClientProvider } from 'react-query';
import { Container } from 'reactstrap';

import StoreContextWrapper from '../store/context';
import Header from './Header';
import Main from './Main';

const queryClient = new QueryClient();

const App = () => (
    <QueryClientProvider client={queryClient}>
        <StoreContextWrapper>
            <Container>
                <header>
                    <Header />
                </header>
            </Container>

            <Container>
                <main>
                    <Main />
                </main>
            </Container>

            <Container>
                <footer>footer here</footer>
            </Container>
        </StoreContextWrapper>
    </QueryClientProvider>
);

export default App;
