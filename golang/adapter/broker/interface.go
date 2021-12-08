package broker

type ProducerInterface interface {
	Publish(msg interface{}, key []byte, topic string) error
}