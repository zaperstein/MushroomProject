Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
# route to test cookies are working 
  get '/hello', to: 'application#hello_world'
end
