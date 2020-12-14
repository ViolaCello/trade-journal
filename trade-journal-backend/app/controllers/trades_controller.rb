class TradesController < ApplicationController

    def index
        trades = Trade.all
        render json: trades, :except => [:created_at, :updated_at]
    end

    def create
        trade = Trade.new(trade_params)
        trade.process_trade
        # byebug
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
