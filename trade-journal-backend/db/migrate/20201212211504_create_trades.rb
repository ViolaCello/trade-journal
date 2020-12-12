class CreateTrades < ActiveRecord::Migration[6.0]
  def change
    create_table :trades do |t|
      t.string :ticker
      t.string :strategy
      t.boolean :result
      t.date :date
      t.float :profit
      t.float :risk
      t.float :ror
      t.text :notes

      t.timestamps
    end
  end
end
