import { Button, Page, ResourceList } from "@shopify/polaris";
import { Provider, ResourcePicker } from "@shopify/app-bridge-react";
import store from 'store-js';
import ResourceListWithProducts from '../components/ResourceList';

class Video extends React.Component{
  state = { open: false };

  render() {
    return(
      <Page
        // breadcrumbs={[{content: 'Home', url: '/'}]}
        title="Sync Videos"
        primaryAction={{
          content: "Select products",
          onAction: () => this.setState({ open: true }),
        }}
      >

        <p>Videos will be synced for selected products.</p>
        <br>
        </br>

        <ResourcePicker
          resourceType="Product"
          showVariants={false}
          open={this.state.open}
          onSelection={(resources) => this.handleSelection(resources)}
          onCancel={() => this.setState({ open: false })}
        />

        <ResourceListWithProducts />
      </Page>
    )
  }

  handleSelection = (resources) => {
    const idsFromResources = resources.selection.map((product) => product.id);
    this.setState({ open: false });
    store.set('ids', idsFromResources);
  };
}

export default Video;