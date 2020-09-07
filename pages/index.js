import { Layout, Page, MediaCard } from "@shopify/polaris";
import { ResourcePicker, TitleBar } from "@shopify/app-bridge-react";
import store from 'store-js';
import ResourceListWithProducts from '../components/ResourceList';

class Index extends React.Component {
  state = { open: false };
  render() {
    const emptyState = !store.get('ids');
    return (
      <Page>
        <ResourcePicker
          resourceType="Product"
          showVariants={false}
          open={this.state.open}
          onSelection={(resources) => this.handleSelection(resources)}
          onCancel={() => this.setState({ open: false })}
        />
        <MediaCard
          title="Getting Started"
          primaryAction={{
            content: 'Learn about getting started',
            onAction: () => {},
          }}
          description="Discover how Shopify can power up your entrepreneurial journey."
          popoverActions={[{content: 'Dismiss', onAction: () => {}}]}
        >
          <img alt="Logo"
            width="100%"
            height="100%"
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
            }}
            src="https://i.imgur.com/6f3J705.png"></img>
        </MediaCard>
      </Page>
    );
  }

  handleSelection = (resources) => {
    const idsFromResources = resources.selection.map((product) => product.id);
    this.setState({ open: false });
    store.set('ids', idsFromResources);
  };
}

export default Index;
