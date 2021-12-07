package presenter

type Presenter interface {
	Show() ([]byte, error)
	Bind(interface{}) error
}