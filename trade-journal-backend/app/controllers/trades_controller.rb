class TradesController < ApplicationController

    def index
        trades = Trade.all
        render json: trades, :except => [:created_at, :updated_at]
    end

    def create
        trade = Trade.new(trade_params)
        # if trade_params[:profit].to_i >= 0
        #     trade.result = true
        # else 
        #     trade.result = false
        # end
        # trade.ror = (trade_params[:profit].to_f / trade_params[:risk].to_f)
        trade.process_trade
        byebug
        if trade.save
          render json: trade
        else
          render json:{ errors: trade.errors.full_messages}
        end
      end

      private

      def trade_params
          params.require(:trade).permit(:ticker, :date, :profit, :risk, :strategy, :notes)
        end

end
