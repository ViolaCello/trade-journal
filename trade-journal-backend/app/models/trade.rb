class Trade < ApplicationRecord
    validates :ticker, presence: true
    validates :date, presence: true
    validates :strategy, presence: true


    def process_trade
        if self.profit >= 0 
            self.result = true
        else
            self.result = false
        end
        self.ror = self.profit.to_f / self.risk.to_f
      
    end

end
