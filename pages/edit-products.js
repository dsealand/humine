import {
    Card,
    DisplayText,
    Form,
    FormLayout,
    Layout,
    Page,
    PageActions,
    TextField
  } from '@shopify/polaris';
  import store from 'store-js';
  import gql from 'graphql-tag';
  import { Mutation } from 'react-apollo';

  const ADD_VIDEO = gql`
  mutation productCreateMedia($input: ProductCreateMedia!) {
    productCreateMedia(productId: $productId, media: $media) {
        media {
            alt
        }
        mediaUserErrors {
            code
            field
            message
        }
        product {
            id
        }
    }
  }
`;
  
  class EditProduct extends React.Component {
    state = {
      discount: '',
      price: '',
      variantId: ''
    };
  
    componentDidMount() {
      this.setState({ discount: this.itemToBeConsumed() });
    }
  
    render() {
      const { name, price, discount, variantId } = this.state;
      return (
        <Mutation mutation={ADD_VIDEO}>
        {(handleSubmit, {error, data}) => {
  
        return (
            <Page>
            <Layout>
                <Layout.Section>
                <DisplayText size="large">{name}</DisplayText>
                <Form>
                    <Card sectioned>
                    <FormLayout>
                        <FormLayout.Group>
                        <TextField
                            prefix="$"
                            value={price}
                            disabled={true}
                            label="Original price"
                            type="price"
                        />
                        <TextField
                            prefix="$"
                            value={discount}
                            onChange={this.handleChange('discount')}
                            label="Discounted price"
                            type="discount"
                        />
                        </FormLayout.Group>
                        <p>
                        This sale price will expire in two weeks
                        </p>
                    </FormLayout>
                    </Card>
                    <PageActions
                    primaryAction={[
                        {
                        content: 'Save',
                        onAction: () => {
                            const productVariableInput = {
                                id: variantId,
                                price: discount,
                            };
                            handleSubmit({
                                variables: { input: productVariableInput },
                               });
                        }
                        }
                    ]}
                    secondaryActions={[
                        {
                        content: 'Remove discount'
                        }
                    ]}
                    />
                </Form>
                </Layout.Section>
            </Layout>
            </Page>
        )}}
        </Mutation>
        );
    }
  
    handleChange = (field) => {
      return (value) => this.setState({ [field]: value });
    };
  
    itemToBeConsumed = () => {
      const item = store.get('item');
    //   const itemId
      const price = item.variants.edges[0].node.price;
      const variantId = item.variants.edges[0].node.id;
      const discounter = price * 0.1;
      this.setState({ price, variantId });
      return (price - discounter).toFixed(2);
    };
}
  
  export default EditProduct;