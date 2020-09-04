import { Button, Page } from "@shopify/polaris";
import { Provider, ResourcePicker } from "@shopify/app-bridge-react";

class Sync extends React.Component{
  state = { open: false };

  render() {
    return(
      <Page
        breadcrumbs={[{content: 'Home', url: '/'}]}
        title="Sync Products"
        primaryAction={{
          content: "Select products",
          onAction: () => this.setState({ open: true }),
        }}
      >

        <p>Selected products in the store will be synced to an S3 bucket.</p>

        <ResourcePicker
          resourceType="Product"
          showVariants={false}
          open={this.state.open}
          onSelection={(resources) => this.handleSelection(resources)}
          onCancel={() => this.setState({ open: false })}
        />
      </Page>
    )
  }

  handleSelection = (resources) => {
    const idsFromResources = resources.selection.map((product) => product.id);
    this.setState({ open: false });
    console.log(idsFromResources);
  };
}

export default Sync;