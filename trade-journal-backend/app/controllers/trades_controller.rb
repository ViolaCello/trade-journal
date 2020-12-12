class TradesController < ApplicationController

    def index
        trades = Trade.all
        render json: trades, :except => [:created_at, :updated_at]
    end


end
