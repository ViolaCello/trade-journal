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
          render json: trade, :except => [:created_at, :updated_at]
        else
          render json:{ errors: trade.errors.full_messages}
        end
      end

      def update 
        trade = Trade.find(params[:id])
        if trade.update(trade_params)
          trade.process_trade
     trade.save
          render json: trade, :except => [:created_at, :updated_at]
        else  
          render json:{ errors: trade.errors.full_messages}
        end
      end

      def destroy
        trade = Trade.find(params[:id])
        trade.destroy
        render json: { message: params[:id] }
      end

      private

      def trade_params
          params.require(:trade).permit(:ticker, :date, :profit, :risk, :strategy, :notes)
        end

end
