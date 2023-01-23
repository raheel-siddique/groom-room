import { Col, Collapse, Row, Space } from 'antd'
import "./Faqs.css";

const { Panel } = Collapse



  export const faqsData = [
  {
    question: 'What payment options are available?',
    key: '1',
    answer:
      'You can pay via Credit Card or PayPal, depending on your convenience.',
  },
  {
    question: 'Do you offer pricing packages??',
    key: '2',

    answer:
      'Instead of restricting businesses to choose from a specific set of packages, we allow you to customize your own package based on your business needs and aspirations.',
  },

  {
    question: 'Do you offer a free trial?',
    key: '3',

    answer:
      'Yes, we offer a 7-day free trial for users to experience our multilayered cyber security functions and make an informed decision for their business.',
  },
  {
    question: 'Is there a money-back guarantee?',
    key: '4',

    answer: 'Yes, we offer a 30-day money back guarantee. ',
  },

  {
    question:
      'What happens if I want to add additional features to my package?',
    key: '5',

    answer:
      'You will be able to upgrade your package and features from the admin console. Your invoice will be updated automatically.',
  },
  {
    question: 'Will I be able to cancel my subscription?',
    key: '6',

    answer: 'Yes, your subscription can be revoked at any time.',
  },
  {
    question: 'How often will I be charged?',
    key: '7',

    answer:
      'You can choose to pay on a monthly or annual basis. Your subscription will be recurrent',
  },
  {
    question: 'Is my subscription recurrent in nature?',
    key: '8',

    answer: 'Yes,  your subscription will be recurrent.',
  },
  {
    question: 'How will I pay for my first subscription?',
    key: '9',

    answer:
      'The process to subscribe to our service is very simple: Step 1: Customize your plan and calculate its total price  Step 2: Follow the simple steps to register your account Step 3: Purchase our subscription plan to start your cybersecurity journey.',
  },
]


const Faqs = () => {
  const onChange = (key: string | string[]) => {
    console.log(key)
  }

  return (
    <>
      <Row className={'faqs-section'} style={{marginTop:100}}>
        <Col lg={4} md={4} xs={4} />
        <Col lg={16} md={24} xs={24}>
          <h2 className={'faqs-heading'}>Frequently Asked Questions</h2>

          <div className={'faqs-container'}>
            <Space direction="vertical" className="faqcollapse">
              {faqsData.map((faqsValues) => {
                return (
                  <Collapse
                    expandIconPosition="right"
                    expandIcon={({ isActive }) =>
                      isActive ? <img
            src="assets/faqs/up.png"
                      /> : 
                      <img
                      src="assets/faqs/down.png"
                                />
                    }
                    className={'faqs-collapse_tag_antd'}
                    defaultActiveKey={['0']}
                    onChange={onChange}
                  >
                    <Panel
                      className={'faqs-panel'}
                      header={faqsValues.question}
                      key={faqsValues.key}
                    >
                      <p className={'faqs-description'}>{faqsValues.answer} </p>
                    </Panel>
                  </Collapse>
                )
              })}
            </Space>
          </div>
        </Col>
        <Col lg={4} md={4} xs={4} />
      </Row>
    </>
  )
}

export default Faqs
