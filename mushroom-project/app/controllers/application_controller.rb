class ApplicationController < ActionController::API
    include ActionController::Cookies


  # to check cookies are working appropriately
    def hello_world
      session[:count] = (session[:count] || 0) + 1
      render json: { count: session[:count] }
    end
end
